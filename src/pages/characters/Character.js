/* Component in CharacterPage to display the Character data */
import React from 'react'
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import styles from "../../styles/Characters.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';
import { useSetCharacterContext } from '../../contexts/CharLocatContex';
import { toast } from 'react-toastify';

const Character = (props) => {
    const setCharacter = useSetCharacterContext();
    const { number,
            role,
            username,
            id,
            actor,
            pickup_address,
            pickup_address_2,
            make_up_time,
            commute_time,
            email,
            mobile,
            agent,
            diet,
            requirements,
            costume1,
            costume2,
            costume3,
            costume4,
            costume5,
            costume6,
            costume7,
            makeup,  
            costume1_image,
            costume2_image,
            costume3_image,
            costume4_image,
            costume5_image,
            costume6_image,
            costume7_image,
            makeup_image } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/characters/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/characters/${id}/`);
          toast.success(`Character "${role}" Deleted`);
          history.push(`/characters`);
        } catch (err) {
        }
      };

      const handleClickMoods = () => {
       /* Functions take the user to the Character's Moodboards
        * They set the Character Context
        * This will be read on App.js page and passed
          as a filter to the /character/moodshots Route */
        setCharacter(role);
        history.push(`/character/moodshots`);
    
      };
    
      const handleClickAddMoods = () => {
        /* Functions take the user to the Character's Moodboards Create Form
        * They set the Character Context
        * This will be read on App.js page and passed
          as a filter to the /character/moodshot/create Route  */
        setCharacter(role);
        history.push(`/character/moodshot/create`);
    
      };

    return (
        <div className={`mb-3 ${styles.Header}`}>
            {/* Moodboard */}
            <Row className={`${styles.ButtonLine} mt-2 mx-3 d-flex align-items-center `}>
                <Col className='text-center mx-0 px-0' xs={1}></Col>
                <Col xs={10} sm={5} className='text-center mx-0 px-0'>
                    <p className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickMoods()} > Moodboards
                    </p>
                </Col>
                <Col xs={5} className='d-none d-sm-block text-center mx-0 px-0'>
                    <p className={`py-0 mb-0 ${styles.Button}`}
                        onClick={() => handleClickAddMoods()} > Add Moodboard
                    </p>
                </Col>
                <Col className='text-center px-0 mx-0' xs={1}>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
            </Row>
            <div className='px-3'>
            <p className={`text-center mx-md-5 mb-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Character Info</p>
            <Row>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>ROLE</p>
                <p>{role} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>NUMBER</p>
                <p>{number} </p>
                </Col>
            </Row>
            <p className={`text-center mt-4 mx-md-5 mb-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Actor Info</p>
            <Row>
            <Col className='text-center mb-3'>
            <div className='mb-3'>
            <span className={`py-1 px-5 ${styles.BoldTitleCall } `} >
            CALLNAME: {username}
            </span>  
            </div>
            </Col>
            </Row>
            <Row className='mb-3 text-center'>
                <Col xs={6} md={4} >
                <p className={`${styles.BoldTitle} 
                  mb-2 text-center mx-1 mx-sm-5`} >ACTOR</p>
                <p>{actor} </p>
                </Col>
                <Col xs={6} md={4}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>MOBILE</p>
                <p>{mobile} </p>
                </Col>
                <Col xs={12} md={4} >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>EMAIL</p>
                <p>{email} </p>
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col className='text-center' md={4} xs={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>AGENT</p>
                <p>{agent} </p>
                </Col>
                <Col className='text-center' md={4} xs={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>DIET</p>
                <p>{diet} </p>
                </Col>
                <Col md={4} xs={12} className="text-center" >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>REQUIREMENTS</p>
                <p>{requirements} </p>
                </Col>
            </Row>
            <h5 className={`text-center mt-4 mb-4 pl-3 mx-1 py-1 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Callsheet Info</h5>
            <div>
            <Row>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>MAKE UP TIME</p>
                <p>{make_up_time} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>COMMUTE TIME</p>
                <p>{commute_time} </p>
                </Col>
            </Row>
            <Row className='mt-3' >
                <Col className='text-center' xs={12} md={6} >
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>PICKUP ADDRESS</p>
                <p>{pickup_address} </p>
                </Col>
                <Col className='text-center' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-2 text-center mx-1 mx-sm-5`}>PICKUP ADDRESS 2</p>
                <p>{pickup_address_2} </p>
                </Col>
            </Row>
            <h5 className={`text-center mt-4 mb-4 pl-3 mx-1 py-1 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Makeup - Costumes</h5>
            {/* makeup/costume 1 */}
            <Row className='text-center mb-5'>
            <Col xs={12} md={6} className='text-center mt-2'>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>MAKEUP</p>
                {makeup_image && <> 
                <div className='px-3 mb-3'>
                    <Image className={styles.Images} 
                    src={makeup_image} alt="makeup image"  />
                    </div>
                    </>
                }
                {makeup &&  <> 
                <p>{makeup} </p>
                </>}
            </Col>                 
            <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>COSTUME 1</p>
                {costume1_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} 
                    src={costume1_image} alt="costume 1" />
                    </div>
                    </>
                }
                {costume1 &&  <> 
                <p>{costume1} </p>
                </>}
                </Col>
            </Row>
            {/* costume 2/3 */}
            <Row className='text-center mb-5'>
                <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>COSTUME 2</p>
                {costume2_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} src={costume2_image} 
                    alt="costume 2"  />
                    </div>
                    </>
                }
                {costume2 &&  <> 
                <p>{costume2} </p>
                </>}
                </Col>
                <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>COSTUME 3</p>
                {costume3_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} src={costume3_image} 
                    alt="costume 3"/>
                    </div>
                    </>
                }
                {costume3 &&  <> 
                <p>{costume3} </p>
                </>}
                </Col>
            </Row>
            {/* costume 4/5 */}
            <Row className='text-center mb-5'>
                <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>
                    COSTUME 4</p>
                {costume4_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} src={costume4_image}
                     alt="costume 4" />
                    </div>
                    </>
                }
                {costume4 &&  <> 
                <p>{costume4} </p>
                </>}
                </Col>
                <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>
                    COSTUME 5</p>
                {costume5_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} src={costume5_image}
                     alt="costume 5" />
                    </div>
                    </>
                }
                {costume5 &&  <> 
                <p>{costume5} </p>
                </>}
                </Col>
            </Row>
            {/* costume 6/7 */}
            <Row className='text-center mb-5'>
                <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>
                    COSTUME 6</p>
                {costume6_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} src={costume6_image}
                     alt="costume 6"/>
                    </div>
                    </>
                }
                {costume6 &&  <> 
                <p>{costume6} </p>
                </>}
                </Col>   
                <Col className='text-center mt-2' xs={12} md={6}>
                <p className={`${styles.BoldTitle} mb-3 mx-1 mx-sm-5`}>
                    COSTUME 7</p>
                {costume7_image && <> 
                <div className='px-1 mb-3'>
                    <Image className={styles.Images} src={costume7_image}
                     alt="costume 7"/>
                    </div>
                    </>
                }
                {costume7 &&  <> 
                <p>{costume7} </p>
                </>}
                </Col>          
            </Row>
            </div>
            </div>
        </div>
    )
}

export default Character
