'use client';

import { Card, CardContent } from "@/components/ui/card";
import { tradersData } from "@/data/traders";

export function StatsOverview() {
  const totalTraders = tradersData.length;
  const totalSpecialties = [...new Set(tradersData.map(t => t.especialidade))].length;
  
  const avgReturn = tradersData.reduce((acc, trader) => {
    const value = parseFloat(trader.retorno_medio.replace('%', '').replace(' ao mês', ''));
    return acc + value;
  }, 0) / totalTraders;
  
  const avgExperience = tradersData.reduce((acc, trader) => {
    const years = parseInt(trader.experiencia.replace(' anos', ''));
    return acc + years;
  }, 0) / totalTraders;
  
  const topPerformer = tradersData.reduce((prev, current) => {
    const prevReturn = parseFloat(prev.retorno_medio.replace('%', '').replace(' ao mês', ''));
    const currentReturn = parseFloat(current.retorno_medio.replace('%', '').replace(' ao mês', ''));
    return currentReturn > prevReturn ? current : prev;
  });

  const stats = [
    {
      title: "Total de Traders",
      value: totalTraders.toString(),
      subtitle: "Profissionais disponíveis",
      color: "text-blue-600"
    },
    {
      title: "Especialidades",
      value: totalSpecialties.toString(),
      subtitle: "Diferentes mercados",
      color: "text-green-600"
    },
    {
      title: "Retorno Médio",
      value: `${avgReturn.toFixed(1)}%`,
      subtitle: "Por mês",
      color: "text-purple-600"
    },
    {
      title: "Experiência Média",
      value: `${avgExperience.toFixed(1)} anos`,
      subtitle: "No mercado",
      color: "text-orange-600"
    },
    {
      title: "Top Performer",
      value: topPerformer.retorno_medio,
      subtitle: topPerformer.nome,
      color: "text-red-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              {stat.title}
            </div>
            <div className="text-xs text-gray-500">
              {stat.subtitle}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}