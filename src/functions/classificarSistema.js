export function classificarSistema(detPrincipal, detX, detY, detZ) {
  if (detPrincipal !== 0) {
    return (detX === 0 && detY === 0 && detZ === 0) ? "O sistema é possível e indeterminado." : "O sistema é possível e determinado.";
  } else {
    return "O sistema é impossível.";
  }
}
