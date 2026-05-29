import React from 'react';
import './Pyramid.css';

interface PyramidLayer {
  level: number;
  frontText: string;
  backText: string;
}

const Pyramid: React.FC = () => {
  const layers: PyramidLayer[] = [
    { level: 1, frontText: "Layer 7: Application", backText: "HTTP, HTTPS, FTP, SMTP protocols live here." },
    { level: 2, frontText: "Layer 6: Presentation", backText: "Handles data encryption, compression, and syntax." },
    { level: 3, frontText: "Layer 5: Session", backText: "Manages, maintains, and terminates authentication connections." },
    { level: 4, frontText: "Layer 4: Transport", backText: "Manages TCP/UDP data transmission and flow control." },
    { level: 5, frontText: "Layer 3: Network", backText: "Handles packet routing, logical IP addresses, and tracking." },
    { level: 6, frontText: "Layer 2: Data Link", backText: "Manages physical MAC addressing, frames, and error detection." },
    { level: 7, frontText: "Layer 1: Physical", backText: "Manages electrical bits, cables, hubs, and physical mediums." }
  ];

  return (
    <div className="pyramid-container">
      {layers.map((layer) => (
        <div 
          key={layer.level} 
          className={`pyramid-layer layer-width-${layer.level}`}
        >
          <div className="layer-card">
  
            <div className={`card-side front gradient-${layer.level}`}>
              {layer.frontText}
            </div>
         
            <div className="card-side back">
              {layer.backText}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pyramid;