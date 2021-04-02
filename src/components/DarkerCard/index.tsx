import react from 'react';
import { CardProps } from '../BrightCard';

import { Card } from './styles';

const DarkerCard:React.FC<CardProps> = ({title, description, pix, financingCampaignName ,
  financingCampaignLink, extraFinancingCampaignLink, extraFinancingCampaignName,
  accountInformationBankName, accountInformationFantasyName, accountInformationAgency, accountInformationOperation,
  accountInformationAccountNumber, accountInformationCNPJ, accountInformationCPF, instagram, facebook, site}) => {
  return (
    <Card>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p> 
      </div>
      <div className="donations">
        <h4>como contribuir:</h4>
        { pix != null &&<h5>{pix}</h5>}
        { financingCampaignLink != null && <button><a href={financingCampaignLink}>{financingCampaignName}</a></button>}
        { extraFinancingCampaignLink != null && <button><a href={extraFinancingCampaignLink}>{extraFinancingCampaignName}</a></button>}
        { accountInformationBankName != null && 
        <>
        <h4>conta bancária:</h4>
        { accountInformationBankName != null && <h5>{accountInformationBankName}</h5>}
        { accountInformationFantasyName != null && <h5>{accountInformationFantasyName}</h5>}
        { accountInformationAgency != null && <h5>{accountInformationAgency}</h5>}
        { accountInformationOperation != null && <h5>{accountInformationOperation}</h5>}
        { accountInformationAccountNumber != null && <h5>{accountInformationAccountNumber}</h5>}
        { accountInformationCNPJ != null && <h5>{accountInformationCNPJ}</h5>}
        { accountInformationCPF != null && <h5>{accountInformationCPF}</h5>}
        </>}
      </div>
      <div className="socials">
        <h4>conheça mais sobre o trabalho:</h4>
        { instagram != null && <button><a href={instagram}>INSTAGRAM</a></button>}
        { facebook != null && <button><a href={facebook}>FACEBOOK</a></button>}
        { site != null && <button><a href={site}>SITE</a></button>}
      </div>
    </Card>
  )
}

export default DarkerCard;