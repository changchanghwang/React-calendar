import React, { useState } from 'react';
import { Calendar, Modal } from '../components';

function IndexScreen() {
  // prop destruction
  // lib, style hooks
  // state, ref hooks
  const [isOpen, setIsOpen] = useState(false);
  // formik
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <>
      <Calendar setIsOpen={setIsOpen} />
      {isOpen && <Modal />}
    </>
  );
}

export { IndexScreen };
