'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { especialidades } from "@/data/traders";

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedSpecialty,
  setSelectedSpecialty,
  sortBy,
  setSortBy
}: FilterBarProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
      <div className="flex-1">
        <Input
          placeholder="Buscar por nome ou especialidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>
      
      <div className="flex gap-3 flex-wrap md:flex-nowrap">
        <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Especialidade" />
          </SelectTrigger>
          <SelectContent>
            {especialidades.map((esp) => (
              <SelectItem key={esp} value={esp}>
                {esp}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nome">Nome</SelectItem>
            <SelectItem value="experiencia">Experiência</SelectItem>
            <SelectItem value="retorno">Retorno</SelectItem>
            <SelectItem value="especialidade">Especialidade</SelectItem>
          </SelectContent>
        </Select>
        
        <Button 
          variant="outline" 
          onClick={() => {
            setSearchTerm('');
            setSelectedSpecialty('Todas');
            setSortBy('nome');
          }}
          className="w-full md:w-auto"
        >
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
}