import React, { Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router';

import PersonLinkBack from '../../components/PeoplePage/PersonLinkBack/PersonLinkBack';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import UiLoading from '../../components/Ui/UiLoading/UiLoading';
import { API_PERSON } from '../../constans/api';
import { withErrorApi } from '../../hoc/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import { getApiResource } from '../../utils/network';

import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(() => import('../../components/PeoplePage/PersonFilms/PersonFilms'));

const PersonPage = ({setErrorApi}) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const { id } = useParams()

    useEffect(()=>{
        (async()=>{
            const res = await getApiResource(`${API_PERSON}/${id}/`)
            
            if(res){
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.heir_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ])

                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            }else{
                setErrorApi(true)
            }
        })();
    },[])

    
  return (
    <>
        <PersonLinkBack/>
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>
                <PersonPhoto personPhoto={personPhoto} personName={personName}/>
                {personInfo&&(<PersonInfo personInfo={personInfo}/>)}
                {personFilms && 
                    <Suspense fallback={<UiLoading theme='white'/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>}
            </div>
        </div>
    </>
  )
}

export default withErrorApi(PersonPage)