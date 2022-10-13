import React from 'react';
import { useState } from 'react';
import EditLocataire from '../components/EditLocataire';
import Locataire from '../components/Locataire';
import './locataireList.css';

const LocataireList = (props) => {
  const [selectId, setSelectId] = useState()

 /**
  * Lorsque l'utilisateur clique sur le bouton, la fonction modifiedLoc sera appelée, et le
  * newLocataire sera passé à la fonction, et l'id du locataire sera passé à la fonction.
  */
  const modifiedLoc = (newLocataire) => {
    props.modifiedLocataire(newLocataire, props.locataire.id)
    setSelectId(0)
  }

  return (
    <>
      <div className='locataireList'>
        {props.locataire.id === selectId ? <EditLocataire locataire={props.locataire} modifiedLoc={modifiedLoc} /> : <Locataire locataire={props.locataire} deleteLocataires={props.deleteLocataires} handleClickEdit={setSelectId} />}
      </div>
    </>
  )
}

export default LocataireList