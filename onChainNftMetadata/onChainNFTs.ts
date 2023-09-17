import {
  MetadataArgs,
  TokenProgramVersion,
  TokenStandard,
} from "@metaplex-foundation/mpl-bubblegum";
import { Keypair, PublicKey } from "@solana/web3.js";

export type NFTMetadata = {
  name: string;
  uri: string;
  symbol: string;
  // ...other properties...
};


export const nftMetadatas: NFTMetadata[] = [
  {
    name: "Compressed NFT 1",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft1.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 2",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft2.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 3",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft3.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 4",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft4.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 5",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft5.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 6",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft6.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 7",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft7.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 8",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft8.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 9",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft9.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 10",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft10.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 11",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft11.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 12",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft12.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 13",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft13.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 14",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft14.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 15",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft15.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 16",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft16.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 17",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft17.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 18",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft18.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 19",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft19.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 20",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft20.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 21",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft21.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 22",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft22.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 23",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft23.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 24",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft24.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 25",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft25.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 26",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft26.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 27",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft27.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 28",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft28.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 29",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft29.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 30",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft30.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 31",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft31.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 32",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft32.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 33",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft33.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 34",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft34.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 35",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft35.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 36",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft36.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 37",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft37.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 38",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft38%20.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 39",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft39.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 40",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft40.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 41",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft41.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 42",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft42.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 43",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft43.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 44",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft44.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 45",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft45.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 46",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft46.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 47",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft47.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 48",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft48.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 49",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft49.json",
    symbol:"METAPES"
  },
  {
    name: "Compressed NFT 50",
    //This is example JSON metadata for the NFTs
    uri: "https://bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m.ipfs.nftstorage.link/ipfs/bafybeieieo7psicaoxxyzf5ujz4zs33neu3iu4yddjbvakgynzur5hcl3m/nft50.json",
    symbol:"METAPES"
  },
 
];




export const createCompressedNFTMetadata = (nftMetadata: NFTMetadata, payer: Keypair): MetadataArgs => {
  return {
    name: nftMetadata.name,
    symbol: nftMetadata.symbol,
    // specific json metadata for each NFT
    uri: nftMetadata.uri,
    creators: [
      {
        address: payer.publicKey,
        verified: false,
        share: 100,
      },

    ],
    editionNonce: 0,
    uses: null,
    collection: null,
    primarySaleHappened: false,
    sellerFeeBasisPoints: 0,
    isMutable: false,
    // values taken from the Bubblegum package
    tokenProgramVersion: TokenProgramVersion.Original,
    tokenStandard: TokenStandard.NonFungible,
  };
};
