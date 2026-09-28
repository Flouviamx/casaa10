"use client";

import { useState, useMemo } from "react";
import PropertyFilters from "./PropertyFilters";
import PropertyGrid from "./PropertyGrid";
import { properties, Property } from "@/data/properties";

export type FilterState = {
  operationType: string;
  propertyType: string;
  stateId: string;
  query: string;
  beds: string;
  baths: string;
  minPrice: number;
  maxPrice: number;
};

export default function Catalog() {
  const [filters, setFilters] = useState<FilterState>({
    operationType: "",
    propertyType: "",
    stateId: "",
    query: "",
    beds: "",
    baths: "",
    minPrice: 0,
    maxPrice: 50000000,
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Operation Type
      if (filters.operationType && prop.operationType !== filters.operationType) return false;

      // Property Type
      if (filters.propertyType && prop.propertyType !== filters.propertyType) return false;

      // Estado
      if (filters.stateId && prop.stateId !== filters.stateId) return false;
      
      // Query (Title, Location, Zone)
      if (filters.query) {
        const q = filters.query.toLowerCase();
        if (
          !prop.title.toLowerCase().includes(q) &&
          !prop.location.toLowerCase().includes(q) &&
          !prop.zone.toLowerCase().includes(q)
        ) {
          return false;
        }
      }

      // Beds
      if (filters.beds && prop.beds < parseInt(filters.beds)) return false;
      
      // Baths
      if (filters.baths && prop.baths < parseInt(filters.baths)) return false;
      
      // Prices (Using absolute numbers from the slider)
      if (prop.price < filters.minPrice) return false;
      // If maxPrice is at 50M, we consider it "50M+", so we don't filter out things above 50M
      if (filters.maxPrice < 50000000 && prop.price > filters.maxPrice) return false;

      return true;
    });
  }, [filters]);

  const handleClear = () => {
    setFilters({
      operationType: "",
      propertyType: "",
      stateId: "",
      query: "",
      beds: "",
      baths: "",
      minPrice: 0,
      maxPrice: 50000000,
    });
  };

  return (
    <>
      <PropertyFilters 
        filters={filters} 
        setFilters={setFilters} 
        onClear={handleClear} 
      />
      <PropertyGrid properties={filteredProperties} />
    </>
  );
}
