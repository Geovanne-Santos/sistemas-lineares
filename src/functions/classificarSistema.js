// Função para classificar o sistema linear
export function classificarSistema(detPrincipal, detX, detY, detZ) {
  if (detPrincipal !== 0) {
    if (detX === 0 && detY === 0 && detZ === 0) {
      return "O sistema é possível e determinado (solução única).";
    } else {
      return "O sistema é possível e indeterminado (infinitas soluções).";
    }
  } else {
    if (detX === 0 && detY === 0 && detZ === 0) {
      return "O sistema é impossível (sem solução).";
    } else {
      return "O sistema é impossível (sem solução consistente).";
    }
  }
}
