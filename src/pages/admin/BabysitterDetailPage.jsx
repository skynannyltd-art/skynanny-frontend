import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, Calendar, Award, CheckCircle, XCircle, FileText, Download, ExternalLink } from 'lucide-react';

const BabysitterDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [babysitter, setBabysitter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      const mockBabysitters = {
        '9': {
          id: 9,
          first_name: 'Marie',
          last_name: 'Dupont',
          email: 'marie.dupont@test.com',
          phone: '+33612345678',
          date_of_birth: '1995-05-15',
          experience_years: 5,
          verification_status: 'pending',
          created_at: '2024-04-26T10:30:00Z',
          bio: 'Babysitter expérimentée avec 5 ans d\'expérience. Passionnée par l\'éducation des enfants et leur bien-être. Diplômée en petite enfance.',
          certifications: ['PSC1', 'CAP Petite Enfance', 'BAFA'],
          criminal_record_file: 'https://example.com/docs/casier.pdf',
          psc1_certificate_file: 'https://example.com/docs/psc1.pdf',
          identity_document_file: 'https://example.com/docs/id.pdf'
        },
        '10': {
          id: 10,
          first_name: 'Sophie',
          last_name: 'Martin',
          email: 'sophie.martin@test.com',
          phone: '+33687654321',
          date_of_birth: '1998-08-22',
          experience_years: 3,
          verification_status: 'approved',
          created_at: '2024-04-25T14:20:00Z',
          bio: 'Jeune babysitter dynamique, disponible les week-ends et vacances scolaires.',
          certifications: ['PSC1', 'BAFA'],
          criminal_record_file: 'https://example.com/docs/casier.pdf',
          psc1_certificate_file: 'https://example.com/docs/psc1.pdf',
          identity_document_file: 'https://example.com/docs/id.pdf'
        },
        '11': {
          id: 11,
          first_name: 'Julie',
          last_name: 'Bernard',
          email: 'julie.bernard@test.com',
          phone: '+33698765432',
          date_of_birth: '1992-03-10',
          experience_years: 7,
          verification_status: 'rejected',
          created_at: '2024-04-24T09:15:00Z',
          bio: 'Babysitter professionnelle avec 7 ans d\'expérience auprès d\'enfants de tous âges.',
          certifications: ['PSC1', 'CAP Petite Enfance', 'BAFA', 'BAFD'],
          criminal_record_file: null,
          psc1_certificate_file: 'https://example.com/docs/psc1.pdf',
          identity_document_file: 'https://example.com/docs/id.pdf'
        }
      };

      const babysitterData = mockBabysitters[id];
      if (babysitterData) {
        setBabysitter(babysitterData);
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  /*
  const fetchBabysitterDetail = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.sky-nanny.com/api/admin/babysitters/' + id, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBabysitter(data);
      }
    } catch (error) {
      console.error('Erreur chargement babysitter:', error);
    } finally {
      setLoading(false);
    }
  };
  */

  const handleApprove = async () => {
    if (!confirm('Approuver ce babysitter ?')) return;

    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.sky-nanny.com/api/admin/babysitters/' + id + '/approve', {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.ok) {
        alert('Babysitter approuve avec succes !');
        fetchBabysitterDetail();
      } else {
        alert('Erreur lors de approbation');
      }
    } catch (error) {
      console.error('Erreur approbation:', error);
      alert('Erreur lors de approbation');
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async () => {
    const reason = prompt('Raison du rejet (optionnel):');
    if (reason === null) return;

    setActionLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.sky-nanny.com/api/admin/babysitters/' + id + '/reject', {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reason }),
      });

      if (response.ok) {
        alert('Babysitter rejete');
        fetchBabysitterDetail();
      } else {
        alert('Erreur lors du rejet');
      }
    } catch (error) {
      console.error('Erreur rejet:', error);
      alert('Erreur lors du rejet');
    } finally {
      setActionLoading(false);
    }
  };

  const downloadDocument = async (documentId, filename) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.sky-nanny.com/api/admin/documents/' + documentId, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'document';
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erreur telechargement:', error);
      alert('Erreur lors du telechargement');
    }
  };

  const viewDocument = (documentUrl) => {
    window.open(documentUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!babysitter) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Babysitter non trouve</p>
        <button onClick={() => navigate('/admin/babysitters')} className="mt-4 text-primary hover:underline">
          Retour a la liste
        </button>
      </div>
    );
  }

  const documents = [
    { id: 'criminal_record', name: 'Casier judiciaire', file: babysitter.criminal_record_file },
    { id: 'psc1', name: 'PSC1', file: babysitter.psc1_certificate_file },
    { id: 'identity', name: 'Piece identite', file: babysitter.identity_document_file },
  ];

  return (
    <div>
      <button
        onClick={() => navigate('/admin/babysitters')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Retour a la liste
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="text-primary" size={40} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {babysitter.first_name} {babysitter.last_name}
              </h1>
              <p className="text-gray-500">ID: {babysitter.id}</p>
            </div>
          </div>

          <div>
            {babysitter.verification_status === 'pending' && (
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                En attente de validation
              </span>
            )}
            {babysitter.verification_status === 'approved' && (
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                <CheckCircle size={16} />
                Approuve
              </span>
            )}
            {babysitter.verification_status === 'rejected' && (
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">
                <XCircle size={16} />
                Rejete
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-400" size={20} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-900">{babysitter.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-gray-400" size={20} />
            <div>
              <p className="text-sm text-gray-500">Telephone</p>
              <p className="font-medium text-gray-900">{babysitter.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-gray-400" size={20} />
            <div>
              <p className="text-sm text-gray-500">Date de naissance</p>
              <p className="font-medium text-gray-900">
                {babysitter.date_of_birth ? new Date(babysitter.date_of_birth).toLocaleDateString('fr-FR') : 'Non renseigne'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="text-gray-400" size={20} />
            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-medium text-gray-900">{babysitter.experience_years || 0} ans</p>
            </div>
          </div>
        </div>

        {babysitter.bio && (
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Bio</h3>
            <p className="text-gray-700">{babysitter.bio}</p>
          </div>
        )}

        {babysitter.certifications && babysitter.certifications.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {babysitter.certifications.map((cert, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents</h2>

        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="text-gray-400" size={24} />
                <div>
                  <p className="font-medium text-gray-900">{doc.name}</p>
                  {doc.file ? (
                    <p className="text-sm text-green-600">Disponible</p>
                  ) : (
                    <p className="text-sm text-red-600">Non telecharge</p>
                  )}
                </div>
              </div>

              {doc.file && (
                <div className="flex gap-2">
                  <button
                    onClick={() => viewDocument(doc.file)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                  >
                    <ExternalLink size={16} />
                    Voir
                  </button>
                  <button
                    onClick={() => downloadDocument(doc.id, doc.name + '.pdf')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                  >
                    <Download size={16} />
                    Telecharger
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {babysitter.verification_status === 'pending' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions</h2>

          <div className="flex gap-4">
            <button
              onClick={handleApprove}
              disabled={actionLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50"
            >
              <CheckCircle size={20} />
              Approuver ce babysitter
            </button>

            <button
              onClick={handleReject}
              disabled={actionLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-50"
            >
              <XCircle size={20} />
              Rejeter ce babysitter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BabysitterDetailPage;