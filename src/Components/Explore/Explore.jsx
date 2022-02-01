import './Explore.css';


const Explore = () => {
return(
    <div className="main-frame">
        <div className='two-frames'>
            <div className='left-frame'>
                
               
                    <a href="https://rarible.com/gigaowlsclub/" target="_blank" rel='noreferrer' className="card">
                    <img src="https://ipfs.io/ipfs/bafybeihkac752vmuz3do6jingruqopc7mpzsgs2nr7cp5htcaliravvq2i" className="card__image" alt="" />
                    <div className="card__overlay">
                    <div className="card__header">                    
                    <div className="card__header-text">
                    <h3 className="card__title">GigaOwl #66</h3>            
                    <span className="card__status">0.005 ETH</span>
                    </div>
                    </div>
                    <p className="card__description">Check out this new collection and many more by clicking on the image.</p>
                    </div>
                    </a>      
               
            </div>
            <div className='right-frame'>
                <h1>NFTs are becoming more fun!</h1>
                <p>Get your GigaOwl NFT right from the best marketplaces right now! <br /><br /><br /><div className='buttonsLow'><a id="opensea" target="_blank" rel='noreferrer'  href='https://opensea.io/collection/gigaowl-collection'>Opensea</a>  <a id="rarible" target="_blank" rel='noreferrer' href="https://rarible.com/gigaowlsclub/">Rarible</a></div></p>
            </div>
        </div>
    </div>
)
}

export default Explore;