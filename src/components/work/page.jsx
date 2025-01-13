import { useState } from "react";
import styles from "./work.module.css";

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
            <span><img src="assets/images/overlappBanner.png" alt="Project 1" /></span>
            
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
              onClick={handleModalOpen}
            />
            </span>
            
          </div>
        </div>
      </div>

      {isModalOpen && (
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
                <img src="../../assets/images/anyhowMedia/anyhowMediaName.svg" alt="" />
              </div>
              <div className={styles.logoVariations1}>
                <div> <img src= "../../assets/anyhowMedia/logoVariation1.png" alt="" /> </div>
                <div > <img src="../../assets/anyhowMedia/anyhowMediaBanner.png" alt="" id={styles.bannerImage} /></div>
                <div> <img src= "../../assets/anyhowMedia/logoBg.png" alt="" /></div>

              </div>
              <div className={styles.logoVariations2}>
                <div> <img src="../../assets/images/anyhowMedia/logoVariation3.png" alt="" /></div>
                <div> <img src="../../assets/images/anyhowMedia/logoVariation2.png" alt="" /> </div>
                <div> <img src="../../assets/images/anyhowMedia/logoVariation4.png" alt="" /></div>
              </div>
              <div className={styles.mockups1}>
                <div> <img src="../../assets/images/anyhowMedia/idsMockup.png" alt="" /></div>
                <div> <img src="../../assets/images/anyhowMedia/businessCardMockup.png" alt="" /></div>
              </div>
              <div className={styles.mockups2}>
                <div> <img src="../../assets/images/anyhowMedia/laptopMockup1.png" alt="" /></div>
                <div> <img src="../../assets/images/anyhowMedia/laptopMockup2.png" alt="" /></div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;

// import styles from './work.module.css'

// const Work = () => {
//     return (
//         <div className={styles.workMain}>
//             <div className={styles.project}>
//                 <div className={styles.title}>My first special project</div>
//                 <div className={styles.keywords}>
//                     <div className={styles.keyword}>UI Design</div>
//                     <div className={styles.keyword}>Branding</div>
//                 </div>
//                 <div className={styles.cover}>
//                     <img src="/coverImage.png" alt="Project 1" />
//                 </div>
//             </div>

//             <div className={styles.project}>
//                 <div className={styles.title}>Visual Designer - Anyhow Media</div>
//                 <div className={styles.keywords}>
//                     <div className={styles.keyword}>Graphic Design</div>
//                     <div className={styles.keyword}>UI/UX Design</div>
//                     <div className={styles.keyword}>Web Development</div>
//                 </div>
//                 <div className={styles.cover}>
//                     <img src="/anyhowMediaBanner.png" alt="Project 2" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Work;