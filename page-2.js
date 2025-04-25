import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section - Full width image of The Box with a Hinged Lid */}
      <section className="hero-section content-section section-blue">
        <div className="container">
          <h1 className="hero-title fade-in">The Box with a Hinged Lid</h1>
          <div className="hero-image-container fade-in">
            <img 
              src="https://ids.lib.harvard.edu/ids/view/47174896" 
              alt="The Box with a Hinged Lid, 6th-7th century CE, Harvard Art Museums" 
              className="hero-image"
            />
          </div>
          <div className="scroll-indicator">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Gallery Section - 6 objects in 2x3 grid layout */}
      <section className="content-section section-orange">
        <div className="container">
          <h2 className="fade-in">Related Objects</h2>
          <div className="gallery-grid">
            {/* Row 1, Column 1 */}
            <div className="gallery-item fade-in">
              <img 
                src="https://ids.lib.harvard.edu/ids/view/47174896" 
                alt="The Box with a Hinged Lid, closed view" 
                className="gallery-image"
              />
              <h3 className="gallery-title">The Box with a Hinged Lid</h3>
              <p className="gallery-subtitle">6th-7th century CE, Byzantine</p>
              <p className="gallery-description">A small bronze container with tin decoration featuring a Greek cross within a radiating star motif, possibly used for storing a folding balance scale or cosmetics.</p>
            </div>
            
            {/* Row 1, Column 2 */}
            <div className="gallery-item fade-in">
              <img 
                src="https://media.britishmuseum.org/media/Repository/Documents/2014_10/3_20/3c3cce7b_a156_4a8d_a1d3_a3b700c31f4e/preview_00035864_001.jpg" 
                alt="Viking Folding Balance Scale, 10th-11th century CE, British Museum" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Viking Folding Balance Scale</h3>
              <p className="gallery-subtitle">10th-11th century CE, Gotland</p>
              <p className="gallery-description">Copper alloy beam with folding arms, hinged suspension fitting, and two concave sheet pans. The folding mechanism allowed for portability, essential for traveling merchants.</p>
            </div>
            
            {/* Row 2, Column 1 */}
            <div className="gallery-item fade-in">
              <img 
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/464046/914091/main-image" 
                alt="Byzantine Ivory Box, 6th-7th century, Metropolitan Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Byzantine Ivory Box</h3>
              <p className="gallery-subtitle">6th-7th century CE, Byzantine Empire</p>
              <p className="gallery-description">Intricately carved ivory container used by Byzantine elites to store luxury goods such as jewelry, showing the tradition of decorative containers for valuable items.</p>
            </div>
            
            {/* Row 2, Column 2 */}
            <div className="gallery-item fade-in">
              <img 
                src="https://www.clevelandart.org/sites/default/files/1924.747_o2.jpg" 
                alt="Byzantine Ivory Box with Scenes of Adam and Eve, 1000-1100s CE, Cleveland Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Byzantine Ivory Box with Biblical Scenes</h3>
              <p className="gallery-subtitle">1000-1100s CE, Constantinople</p>
              <p className="gallery-description">Carved ivory box with scenes from the Old Testament stories of Adam and Eve. The box was likely used to contain jewelry or small valuables.</p>
            </div>
            
            {/* Row 3, Column 1 */}
            <div className="gallery-item fade-in">
              <img 
                src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/544228/1088885/main-image" 
                alt="Egyptian Cosmetic Box, New Kingdom, Metropolitan Museum of Art" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Egyptian Cosmetic Box</h3>
              <p className="gallery-subtitle">New Kingdom, Egypt</p>
              <p className="gallery-description">Egyptian cosmetic containers show a long tradition of small decorative boxes for personal items that influenced later Byzantine designs for cosmetic and toiletry storage.</p>
            </div>
            
            {/* Row 3, Column 2 */}
            <div className="gallery-item fade-in">
              <img 
                src="https://i.pinimg.com/originals/33/55/99/335599715982482759c9c5d0e9b8d4a3.jpg" 
                alt="Medieval Scale Weights in Wooden Box, 17th century, Netherlands" 
                className="gallery-image"
              />
              <h3 className="gallery-title">Medieval Scale Weights in Wooden Box</h3>
              <p className="gallery-subtitle">17th century, Netherlands</p>
              <p className="gallery-description">A pair of small scales and brass weights for measuring coins, housed in a carved wooden box, showing the continuity of design principles for portable weighing instruments.</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>© 2025 The Box with a Hinged Lid Digital Gallery | Harvard GENED 1160: Harvard Gets Medieval</p>
      </footer>
    </main>
  );
}
