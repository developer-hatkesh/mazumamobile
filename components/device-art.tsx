export function DeviceArt({ type, brand }: { type: string; brand: string }) {
  return <div className={`device-art ${type}`}><span>{brand === "Google" ? "G" : brand === "Apple" ? "●" : "✦"}</span></div>;
}
