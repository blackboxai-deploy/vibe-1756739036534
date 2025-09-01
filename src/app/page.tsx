'use client';

import { useState, useMemo } from 'react';
import { TraderCard } from '@/components/TraderCard';
import { FilterBar } from '@/components/FilterBar';
import { StatsOverview } from '@/components/StatsOverview';
import { tradersData } from '@/data/traders';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas');
  const [sortBy, setSortBy] = useState('nome');

  const filteredAndSortedTraders = useMemo(() => {
    let filtered = tradersData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(trader =>
        trader.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trader.especialidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trader.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by specialty
    if (selectedSpecialty !== 'Todas') {
      filtered = filtered.filter(trader => trader.especialidade === selectedSpecialty);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'nome':
          return a.nome.localeCompare(b.nome);
        case 'experiencia':
          const aExp = parseInt(a.experiencia.replace(' anos', ''));
          const bExp = parseInt(b.experiencia.replace(' anos', ''));
          return bExp - aExp;
        case 'retorno':
          const aRet = parseFloat(a.retorno_medio.replace('%', '').replace(' ao mês', ''));
          const bRet = parseFloat(b.retorno_medio.replace('%', '').replace(' ao mês', ''));
          return bRet - aRet;
        case 'especialidade':
          return a.especialidade.localeCompare(b.especialidade);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedSpecialty, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Trading Experts Platform
            </h1>
            <p className="text-gray-600 text-lg">
              Conecte-se com os melhores traders profissionais do Brasil
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Statistics Overview */}
        <StatsOverview />

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Results Count */}
        <div className="mt-6 mb-4">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold">{filteredAndSortedTraders.length}</span> de{' '}
            <span className="font-semibold">{tradersData.length}</span> traders
          </p>
        </div>

        {/* Traders Grid */}
        {filteredAndSortedTraders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedTraders.map((trader, index) => (
              <TraderCard key={index} trader={trader} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-300 mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum trader encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar seus filtros de busca para encontrar mais resultados.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Trading Experts Platform</h3>
          <p className="text-gray-400">
            Plataforma profissional para conectar investidores com traders especialistas
          </p>
        </div>
      </footer>
    </div>
  );
}