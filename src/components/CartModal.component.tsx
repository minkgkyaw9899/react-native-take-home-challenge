import React, {FC} from 'react';
import {IconButton, Modal, Portal} from 'react-native-paper';
import {Dimensions} from 'react-native';
import {useAppDispatch, useAppSelector} from 'hooks';
import {hideModal, selectedCartModal} from 'actions/cartModalSlice';
import {CartList} from 'components/CartList.component';

const deviceWidth = Dimensions.get('window').width;

export const CartModal: FC = () => {
  const {visible} = useAppSelector(selectedCartModal);

  const dispatch = useAppDispatch();

  const handleHideModal = () => dispatch(hideModal());

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={handleHideModal}
        contentContainerStyle={{
          position: 'absolute',
          bottom: 40,
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
          zIndex: 1,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}>
        {/*   card  */}
        <CartList />

        <IconButton
          icon="close"
          size={20}
          onPress={handleHideModal}
          iconColor={'#FFFFFF'}
          style={{
            backgroundColor: '#FD2929',
            borderRadius: 10,
            position: 'absolute',
            bottom: -25,
            left: deviceWidth / 2.2,
          }}
        />
      </Modal>
    </Portal>
  );
};
