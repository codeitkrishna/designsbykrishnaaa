import { useState } from "react";
import styles from "./work.module.css";

const Work = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleModalOpen = (modalType) => {
    setActiveModal(modalType);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className={styles.workMain}>
        <div className={styles.project}>
          <div className={styles.title}>My first special project</div>
          <div className={styles.keywords}>
            <div className={styles.keyword}>UI/UX Design</div>
            <div className={styles.keyword}>Logo Design</div>
          </div>
          <div className={styles.cover}>
            <span>
              <img 
                src="assets/images/overlappBanner.png" 
                alt="Project 1" 
                onClick={() => handleModalOpen('project1')}
              />
            </span>
          </div>
        </div>

        <div className={styles.project}>
          <div className={styles.title}>Visual Designer - Anyhow Media</div>
          <div className={styles.keywords}>
            <div className={styles.keyword}>Graphic Design</div>
            <div className={styles.keyword}>UI/UX Design</div>
            <div className={styles.keyword}>Web Development</div>
          </div>
          <div className={styles.cover}>
            <span>
              <img
                src="assets/images/anyhowMediaBanner.png"
                alt="Project 2"
                onClick={() => handleModalOpen('anyhow')}
              />
            </span>
          </div>
        </div>
      </div>

      {activeModal === 'project1' && (
        <div className={styles.modalBackdrop} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              <button className={styles.closeButton} onClick={handleModalClose}>
                &times;
              </button>
            </span>

            <div className={styles.mainContent}>
              <div className={styles.modalTitle}>
                <img src="assets/images/overlapp/overlappLogo.svg" alt="Project 1 Logo" />
              </div>
              
              <div className={styles.problemStatement}>
                <h2>The Challenge</h2>
                <p>Remote teams spend nearly 5 hours weekly coordinating meeting times across time zones. Overlapp addresses this by providing instant visual understanding of team availability, eliminating manual calculations and back-and-forth communications.</p>
                
                <h2>Project Overview</h2>
                <p>Overlapp is a streamlined web application that solves the fundamental challenge of remote collaboration: finding the perfect time to connect across different time zones. By providing an intuitive visual interface for team availability, it transforms complex time calculations into clear, actionable insights.</p>
              </div>


              <div className={styles.projectDashboard}>
                <img src="assets/images/overlapp/dashboard.png" alt="Project 1 Dashboard" />
              </div>

              <div className={styles.note}>Design brief and prototype to be added VERY VERY soon!</div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'anyhow' && (
        <div className={styles.modalBackdrop} onClick={handleModalClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              <button className={styles.closeButton} onClick={handleModalClose}>
                &times;
              </button>
            </span>

            <div className={styles.mainContent}>
              <div className={styles.modalTitle}>
                <img src="assets/images/anyhowMedia/anyhowMediaName.svg" alt="" />
              </div>
              <div className={styles.logoVariations1}>
                <div> <img src="assets/images/anyhowMedia/logoVariation1.png" alt="" /> </div>
                <div > <img src="assets/images/anyhowMedia/anyhowMediaBanner.png" alt="" id={styles.bannerImage} /></div>
                <div> <img src="assets/images/anyhowMedia/logoBg.png" alt="" /></div>
              </div>
              <div className={styles.logoVariations2}>
                <div> <img src="assets/images/anyhowMedia/logoVariation3.png" alt="" /></div>
                <div> <img src="assets/images/anyhowMedia/logoVariation2.png" alt="" /> </div>
                <div> <img src="assets/images/anyhowMedia/logoVariation4.png" alt="" /></div>
              </div>
              <div className={styles.mockups1}>
                <div> <img src="assets/images/anyhowMedia/idsMockup.png" alt="" /></div>
                <div> <img src="assets/images/anyhowMedia/businessCardMockup.png" alt="" /></div>
              </div>
              <div className={styles.mockups2}>
                <div> <img src="assets/images/anyhowMedia/laptopMockup1.png" alt="" /></div>
                <div> <img src="assets/images/anyhowMedia/laptopMockup2.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;