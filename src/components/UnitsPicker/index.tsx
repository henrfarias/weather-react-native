import React from 'react';
import { Picker } from '@react-native-community/picker';

import { PickerContainer, PickerStyled } from './styles';

import { ItemValue } from '@react-native-community/picker/typings/Picker';

const UnitsPicker: React.FC<{
  unitSystem: ItemValue;
  onChangeUnitSystem: React.Dispatch<React.SetStateAction<string | number>>
}> = ({ unitSystem, onChangeUnitSystem }) => {
  return (
    <PickerContainer>
      <PickerStyled 
        selectedValue={unitSystem}
        onValueChange={(value) => {onChangeUnitSystem(value)}}
        mode='dropdown'
      >
        <Picker.Item label='C °' value='metric' />
        <Picker.Item label='F °' value='imperial' />
      </PickerStyled>
    </PickerContainer>
  )
};

export default UnitsPicker;