function sumar(a, b) {
  return a - b; // Falla intencional
}

if (sumar(2, 2) !== 4) {
  console.error("❌ ERROR: La suma es incorrecta.");
  process.exit(1);
} else {
  console.log("✅ ÉXITO: Código validado.");
}
