import { useState, useEffect } from 'react';
import { Person } from '../types/Person';

export const usePersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await fetch('/data/persons.json');
        if (!response.ok) {
          throw new Error('Failed to fetch persons data');
        }
        const data = await response.json();
        setPersons(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPersons();
  }, []);

  return { persons, loading, error };
};