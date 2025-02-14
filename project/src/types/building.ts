export interface BuildingDetails {
    aluguel: string;
    compra: string;
    condominio: string;
    iptu: string;
    areas: string[];
    images: string[];
  }
  
  export interface Building {
    id: string;
    image: string;
    name: string;
    location: string;
    details: BuildingDetails;
  }