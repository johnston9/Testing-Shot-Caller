/* Component to display the AD/PA Department Calltimes
   on the Callsheet */
   import React from "react";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../styles/Callsheets.module.css";
   
   const TimesADPA = ({crewInfoOne, callsheet, setShowAD }) => {
   
     const {ad_1_name,
       ad_2_name,
       ad_3_name,
       ad_4_name,
       ad_5_name,
       pro_assistant_1_name,
       pro_assistant_2_name,
       pro_assistant_3_name,
       pro_assistant_4_name,
       pro_assistant_5_name,} = crewInfoOne;
   
     const { ad_1_calltime, ad_2_calltime, ad_3_calltime, ad_4_calltime, 
      ad_5_calltime, pro_assistant_1_calltime,
       pro_assistant_2_calltime, pro_assistant_3_calltime,
       } = callsheet;

     return (
       <div>
         <div className={`mt-0 text-center  ${styles.Back3 }`}>
         <span className={`float-right ${styles.Close }`} onClick={() => setShowAD(false) } >Close</span> 
         <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >AD POSITIONS </h5>
         </div>
         <div>
         {/* 1st AD */}
         {ad_1_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>1st AD</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{ad_1_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{ad_1_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* 2nd AD */}
         {ad_2_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>2nd AD</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{ad_2_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{ad_2_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* 3rd AD */}
         {ad_3_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>3rd AD</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{ad_3_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{ad_3_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* 4th AD */}
         {ad_4_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>4th AD</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{ad_4_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{ad_4_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* 5th AD */}
         {ad_5_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>5th AD</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{ad_5_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{ad_5_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         <div className={`my-3 mt-0 text-center ${styles.SubTitle }`}>
             <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >PA POSITIONS </h5>
        </div>
         {/* Pro Assistant 1 */}
         {pro_assistant_1_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Pro Assistant 1</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{pro_assistant_1_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{pro_assistant_1_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Pro Assistant 2 */}
         {pro_assistant_2_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Pro Assistant 2</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{pro_assistant_2_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{pro_assistant_2_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
         {/* Pro Assistant 3 */}
         {pro_assistant_3_calltime && 
           (<Col xs={12} md={6}>
           <Row className={` mx-0 `} >
             <Col className={`mx-0 px-1 ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>Pro Assistant 3</p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={5} md={5} >
               <p className={`my-0 py-0 `}>{pro_assistant_3_name} </p>
             </Col>
             <Col className={`mx-0 px-1  ${styles.Border}`} xs={2} md={2} >
               <p className={`my-0 py-0 `}>{pro_assistant_3_calltime} </p>
             </Col>
           </Row>
           </Col> )
         }
       </div>
       </div>
     )
   }

export default TimesADPA