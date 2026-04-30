import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Search, Download, Eye, Calendar, User, Filter } from 'lucide-react';

const DocumentsPage = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      setDocuments([
        {
          id: 1,
          babysitter_id: 9,
          babysitter_name: 'Marie Dupont',
          document_type: 'casier_judiciaire',
          document_url: 'https://example.com/docs/casier_marie.pdf',
          uploaded_at: '2024-04-20T10:30:00Z',
          status: 'approved'
        },
        {
          id: 2,
          babysitter_id: 9,
          babysitter_name: 'Marie Dupont',
          document_type: 'psc1',
          document_url: 'https://example.com/docs/psc1_marie.pdf',
          uploaded_at: '2024-04-20T10:32:00Z',
          status: 'approved'
        },
        {
          id: 3,
          babysitter_id: 9,
          babysitter_name: 'Marie Dupont',
          document_type: 'carte_identite',
          document_url: 'https://example.com/docs/id_marie.jpg',
          uploaded_at: '2024-04-20T10:35:00Z',
          status: 'approved'
        },
        {
          id: 4,
          babysitter_id: 10,
          babysitter_name: 'Sophie Martin',
          document_type: 'casier_judiciaire',
          document_url: 'https://example.com/docs/casier_sophie.pdf',
          uploaded_at: '2024-04-22T14:15:00Z',
          status: 'approved'
        },
        {
          id: 5,
          babysitter_id: 10,
          babysitter_name: 'Sophie Martin',
          document_type: 'psc1',
          document_url: 'https://example.com/docs/psc1_sophie.pdf',
          uploaded_at: '2024-04-22T14:18:00Z',
          status: 'approved'
        },
        {
          id: 6,
          babysitter_id: 10,
          babysitter_name: 'Sophie Martin',
          document_type: 'carte_identite',
          document_url: 'https://example.com/docs/id_sophie.jpg',
          uploaded_at: '2024-04-22T14:20:00Z',
          status: 'approved'
        },
        {
          id: 7,
          babysitter_id: 11,
          babysitter_name: 'Julie Bernard',
          document_type: 'casier_judiciaire',
          document_url: 'https://example.com/docs/casier_julie.pdf',
          uploaded_at: '2024-04-25T09:00:00Z',
          status: 'pending'
        },
        {
          id: 8,
          babysitter_id: 11,
          babysitter_name: 'Julie Bernard',
          document_type: 'psc1',
          document_url: 'https://example.com/docs/psc1_julie.pdf',
          uploaded_at: '2024-04-25T09:05:00Z',
          status: 'pending'
        },
        {
          id: 9,
          babysitter_id: 11,
          babysitter_name: 'Julie Bernard',
          document_type: 'carte_identite',
          document_url: null,
          uploaded_at: null,
          status: 'missing'
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const getDocumentTypeLabel = (type) => {
    const labels = {
      casier_judiciaire: 'Casier Judiciaire',
      psc1: 'PSC1',
      carte_identite: "Carte d'Identité",
      passport: 'Passeport',
      diplome: 'Diplôme',
    };
    return labels[type] || type;
  };

  const getStatusBadge = (status) => {
    const badges = {
      approved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Approuve' },
      pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'En attente' },
      rejected: { bg: 'bg-red-100', text: 'text-red-700', label: 'Rejete' },
      missing: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Manquant' },
    };
    
    const badge = badges[status] || badges.pending;
    return (
      <span className={'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ' + badge.bg + ' ' + badge.text}>
        {badge.label}
      </span>
    );
  };

  const viewDocument = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Document non disponible');
    }
  };

  const downloadDocument = (url, filename) => {
    if (url) {
      alert('Telechargement de ' + filename + ' (Mode demo)');
    } else {
      alert('Document non disponible');
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.babysitter_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         getDocumentTypeLabel(doc.document_type).toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && doc.document_type === filter;
  });

  const stats = {
    total: documents.filter(d => d.status !== 'missing').length,
    approved: documents.filter(d => d.status === 'approved').length,
    pending: documents.filter(d => d.status === 'pending').length,
    missing: documents.filter(d => d.status === 'missing').length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion Documents</h1>
        <p className="text-gray-600">Tous les documents uploades par les babysitters</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total documents</p>
            <FileText className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Approuves</p>
            <FileText className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">En attente</p>
            <FileText className="text-orange-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Manquants</p>
            <FileText className="text-gray-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-600">{stats.missing}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par babysitter ou type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-2 items-center">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Tous les types</option>
              <option value="casier_judiciaire">Casier Judiciaire</option>
              <option value="psc1">PSC1</option>
              <option value="carte_identite">Carte d'Identité</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Babysitter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type Document</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Upload</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDocuments.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  Aucun document trouve
                </td>
              </tr>
            ) : (
              filteredDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">#{doc.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      <button
                        onClick={() => navigate('/admin/babysitters/' + doc.babysitter_id)}
                        className="font-medium text-primary hover:underline"
                      >
                        {doc.babysitter_name}
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-gray-400" />
                      <p className="text-sm font-medium text-gray-900">
                        {getDocumentTypeLabel(doc.document_type)}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {doc.uploaded_at ? (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar size={14} />
                        {new Date(doc.uploaded_at).toLocaleDateString('fr-FR')}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">-</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(doc.status)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {doc.document_url ? (
                        <>
                          <button
                            onClick={() => viewDocument(doc.document_url)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition text-sm"
                          >
                            <Eye size={14} />
                            Voir
                          </button>
                          <button
                            onClick={() => downloadDocument(doc.document_url, getDocumentTypeLabel(doc.document_type))}
                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm"
                          >
                            <Download size={14} />
                            Telecharger
                          </button>
                        </>
                      ) : (
                        <span className="text-sm text-gray-400">Non disponible</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentsPage;