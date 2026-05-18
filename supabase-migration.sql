-- Ejecutar en el SQL Editor de Supabase
CREATE TABLE IF NOT EXISTS contactos (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre text NOT NULL,
  email text NOT NULL,
  mensaje text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contactos ENABLE ROW LEVEL SECURITY;

-- Cualquiera puede escribir (formulario público)
CREATE POLICY "anon_insert" ON contactos
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Solo usuarios autenticados pueden leer
CREATE POLICY "auth_select" ON contactos
  FOR SELECT
  TO authenticated
  USING (true);
