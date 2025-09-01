'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trader } from "@/data/traders";

interface TraderCardProps {
  trader: Trader;
}

export function TraderCard({ trader }: TraderCardProps) {
  const getSpecialtyColor = (especialidade: string) => {
    const colors = {
      'Day Trade': 'bg-red-100 text-red-800 border-red-200',
      'Forex': 'bg-blue-100 text-blue-800 border-blue-200',
      'Criptomoedas': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Opções': 'bg-purple-100 text-purple-800 border-purple-200',
      'Commodities': 'bg-green-100 text-green-800 border-green-200',
      'Índices': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Swing Trade': 'bg-pink-100 text-pink-800 border-pink-200',
      'Algo Trading': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Futuros': 'bg-orange-100 text-orange-800 border-orange-200',
      'Fundamentalista': 'bg-emerald-100 text-emerald-800 border-emerald-200'
    };
    return colors[especialidade as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getReturnColor = (retorno: string) => {
    const value = parseFloat(retorno.replace('%', '').replace(' ao mês', ''));
    if (value >= 6) return 'text-green-600 font-bold';
    if (value >= 4) return 'text-blue-600 font-semibold';
    return 'text-gray-600 font-medium';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 h-full">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {trader.nome}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Badge 
                variant="outline" 
                className={`${getSpecialtyColor(trader.especialidade)} font-medium`}
              >
                {trader.especialidade}
              </Badge>
              <span className="text-sm text-gray-500">• {trader.experiencia}</span>
            </div>
          </div>
        </div>
        
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center text-primary font-bold text-2xl">
          {trader.nome.split(' ').map(n => n[0]).join('')}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {trader.bio}
        </p>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Retorno Médio</p>
            <p className={`text-lg ${getReturnColor(trader.retorno_medio)}`}>
              {trader.retorno_medio}
            </p>
          </div>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            size="sm"
          >
            Ver Perfil
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}