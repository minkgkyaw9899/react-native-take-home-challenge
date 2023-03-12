import React, {FC} from 'react';
import {IconButton, Modal, Portal, Text} from 'react-native-paper';
import {Dimensions, View} from 'react-native';

interface ICartModal {
  visible: boolean;
  hideModal: () => void;
  showModal: () => void;
}

const deviceWidth = Dimensions.get('window').width;

export const CartModal: FC<ICartModal> = ({visible, hideModal, showModal}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        // onDismiss={hideModal}
        contentContainerStyle={{
          position: 'absolute',
          bottom: 40,
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
          zIndex: 1
        }}>
        {/*   card  */}

        <IconButton
          icon="close"
          size={20}
          onPress={hideModal}
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
