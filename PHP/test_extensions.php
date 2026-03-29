<?php
// test_extensions.php en htdocs
echo "<h3>Verificando extensiones PostgreSQL</h3>";
echo "pgsql: " . (extension_loaded('pgsql') ? '✅ ACTIVA' : '❌ INACTIVA') . "<br>";
echo "pdo_pgsql: " . (extension_loaded('pdo_pgsql') ? '✅ ACTIVA' : '❌ INACTIVA') . "<br>";
?>