# Prompts de imágenes a generar con IA

Estilo base a repetir en TODOS los prompts (cópialo siempre al final del prompt
específico para mantener consistencia visual en todo el sitio):

> Estilo: ilustración médica moderna, vector limpio, minimalista, institucional,
> sin sangre, sin contenido explícito, paleta de colores azul institucional
> (#0A4D8C), azul oscuro (#06304F), blanco, gris claro y detalles en verde
> quirúrgico (#1F8A70). Fondo blanco o transparente. Líneas finas y consistentes,
> aspecto profesional de clínica médica internacional.

Genera cada imagen en formato **WEBP o JPG**, resolución mínima 1600×1200 (o
1200×1200 para cuadradas), y guárdala exactamente en la ruta indicada para que
el sitio la reconozca automáticamente.

## 1. Identidad / generales

| Archivo | Prompt |
|---|---|
| `public/images/og-default.jpg` (1200×630) | Imagen de portada institucional para redes sociales, mostrando un ícono abstracto de salud urológica (gota, riñón estilizado o silueta médica) sobre fondo azul institucional con espacio para texto, estilo limpio y corporativo. |
| `public/images/doctor/retrato-dr-betancourt.jpg` (1000×1250) | NOTA: esta debe ser una FOTOGRAFÍA REAL del Dr. Betancourt, no ilustración. Súbela tú directamente cuando la tengas; no se genera con IA. |
| `public/images/doctor/consulta-ilustracion.jpg` (1200×900) | Ilustración de una consulta médica institucional: doctor y paciente conversando en un escritorio clínico moderno, ambiente cálido y profesional, sin rostros detallados (estilo icónico/abstracto). |

## 2. Especialidades (una por cada slug, 1200×900)

| Archivo | Prompt |
|---|---|
| `public/images/especialidades/vasectomia.jpg` | Ilustración médica moderna y minimalista en vector plano de la anatomía del sistema reproductor masculino mostrando los conductos deferentes. |
| `public/images/especialidades/circuncision.jpg` | Esquema anatómico simplificado del procedimiento de circuncisión, líneas limpias. |
| `public/images/especialidades/fimosis.jpg` | Comparación anatómica simplificada entre prepucio normal y fimosis. |
| `public/images/especialidades/frenillo-corto.jpg` | Esquema del frenillo prepucial y su corrección quirúrgica. |
| `public/images/especialidades/disfuncion-erectil.jpg` | Ilustración conceptual y abstracta sobre salud vascular y sexual masculina (no explícita). |
| `public/images/especialidades/curvatura-peneana.jpg` | Esquema anatómico no explícito sobre el eje del pene y su corrección. |
| `public/images/especialidades/enfermedad-de-peyronie.jpg` | Esquema educativo de una placa fibrosa en la túnica del pene (no explícito). |
| `public/images/especialidades/protesis-peneana.jpg` | Esquema técnico no explícito de un dispositivo protésico cilíndrico en contexto anatómico. |
| `public/images/especialidades/infertilidad-masculina.jpg` | Ilustración conceptual sobre fertilidad masculina y evaluación seminal (microscopio, espermatozoides estilizados, no explícita). |
| `public/images/especialidades/varicocele.jpg` | Esquema educativo del plexo venoso pampiniforme y su dilatación. |
| `public/images/especialidades/dolor-testicular.jpg` | Esquema anatómico escrotal y testicular para fines educativos. |
| `public/images/especialidades/hidrocele.jpg` | Corte transversal esquemático del escroto mostrando acumulación de líquido. |
| `public/images/especialidades/quiste-de-epididimo.jpg` | Esquema educativo del epidídimo y un quiste asociado. |
| `public/images/especialidades/estenosis-uretral.jpg` | Esquema técnico del trayecto uretral masculino con una zona de estrechamiento. |
| `public/images/especialidades/uretroplastia.jpg` | Esquema técnico del procedimiento de reconstrucción uretral con injerto. |
| `public/images/especialidades/reconstruccion-uretral.jpg` | Esquema técnico de reconstrucción anatómica compleja del tracto urinario inferior. |
| `public/images/especialidades/trauma-uretral.jpg` | Esquema del trayecto uretral y la pelvis ósea en contexto de trauma (sin sangre). |

## 3. Biblioteca educativa (categorías, 1000×750)

| Archivo | Prompt |
|---|---|
| `public/images/biblioteca/prostata.jpg` | Ilustración educativa de la anatomía de la próstata en corte sagital simplificado. |
| `public/images/biblioteca/pene.jpg` | Ilustración educativa de la anatomía básica del pene, vista esquemática. |
| `public/images/biblioteca/testiculo.jpg` | Ilustración educativa de la anatomía testicular y el autoexamen. |
| `public/images/biblioteca/escroto.jpg` | Ilustración educativa del contenido escrotal. |
| `public/images/biblioteca/infertilidad.jpg` | Ilustración conceptual sobre fertilidad y espermiograma. |
| `public/images/biblioteca/cirugia.jpg` | Ilustración conceptual de instrumental quirúrgico mínimo, estilo icónico institucional. |
| `public/images/biblioteca/reconstruccion.jpg` | Ilustración conceptual de reconstrucción del tracto urinario. |
| `public/images/biblioteca/salud-sexual.jpg` | Ilustración conceptual abstracta sobre bienestar sexual masculino (no explícita). |
| `public/images/biblioteca/prevencion.jpg` | Ilustración conceptual de chequeo médico preventivo (calendario + estetoscopio estilizados). |

---

Mientras no subas estas imágenes, el sitio funciona igual: las páginas usan
bloques de color de marca como placeholder visual en lugar de imágenes rotas.
Cuando tengas los archivos, súbelos a las rutas indicadas en `public/images/`
con esos nombres exactos y podemos conectarlos a cada página en un siguiente
paso.
