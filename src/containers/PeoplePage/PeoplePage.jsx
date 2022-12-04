import React, { useEffect,useState } from 'react'

import { changeHTTP, getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constans/api'
import { getPeopleId,getPeopleImage, getPeoplePageId } from '../../services/getPeopleData'

import PeopleList from '../../components/PeoplePage/PeopleList'
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation'
import { withErrorApi } from '../../hoc/withErrorApi'
import { useQueryParams } from '../../hooks/useQueryParams'

import styles from './PeoplePage.module.css'


const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)
    
    const query = useQueryParams()
    const queryPage = query.get('page')

    const getResours = async(url) => {
            const res = await getApiResource(url)

            if(res){
                const peopleList = res.results.map(({name, url}) => {
                    const id = getPeopleId(url)
                    const img = getPeopleImage(id)
    
                    return {
                        id,
                        name,
                        img
                    }
                })
                setPeople(peopleList)
                setPrevPage(changeHTTP(res.previos))
                setNextPage(changeHTTP(res.next))
                setCounterPage(getPeoplePageId(url))
                setErrorApi(false)
            }else{
                setErrorApi(true)
            }
    }

    useEffect(() => {
        getResours(API_PEOPLE+queryPage)
    }, [])
  return (
    <div>
        <PeopleNavigation 
            getResours={getResours}
            prevPage={prevPage}
            nextPage={nextPage}
            counterPage={counterPage}
        />
        {people &&<PeopleList people={people} /> }        
    </div>
  )
}

export default withErrorApi(PeoplePage) 