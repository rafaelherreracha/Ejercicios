-- ==========================================
-- PROYECTO 4: INTRODUCCIÓN A BASES DE DATOS (SQL)
-- ==========================================

-- 1. Recuperar los vuelos y su identificador con status 'On Time'
SELECT flight_id, route_no, status, scheduled_departure, scheduled_arrival
FROM bookings.flights
WHERE status = 'On Time';

-- 2. Reservas con cantidad total mayor a 1.000.000
SELECT *
FROM bookings.bookings
WHERE total_amount > 1000000;

-- 3. Modelos de aviones disponibles
SELECT *
FROM bookings.airplanes_data;

-- 4. Identificadores de vuelo que han volado con Boeing 737 (código 733)
SELECT f.flight_id, f.route_no, r.airplane_code, f.status
FROM bookings.flights f
JOIN bookings.routes r ON f.route_no = r.route_no
WHERE r.airplane_code = '733';

-- 5. Información detallada de tickets comprados por personas llamadas Irina
SELECT *
FROM bookings.tickets
WHERE passenger_name ILIKE 'IRINA %' 
   OR passenger_name ILIKE '% IRINA%';

