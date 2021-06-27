import styled from 'styled-components/native';
import { colors } from '../../../utils/variables';

export const DetailsContainer = styled.View`
  position: absolute;
  bottom: 30px;
  width: 90%;
  border: 0.5px solid ${colors.primary};
  align-self: center;
  border-radius: 10px;
  overflow: hidden; 
`;

export const DetailsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsBox = styled.View`
  flex: 1;
  padding: 20px 10px;
  border: 0.4px solid ${colors.primary};
`;

export const DetailsInfo = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${colors.reading};
  font-weight: bold;
`;

export const DetailValue = styled.Text`
  font-size: 15px;
  color: ${colors.reading};
  font-weight: bold;
  margin: 7px;
`;