import { ContainerCard } from './styles';

const Card = ({
  icon,
  title,
  text
}) => (
  <ContainerCard>
    <img src={icon} alt={title} />
    <h4>{title}</h4>
    <p>{text}</p>
  </ContainerCard>
);

export default Card;
