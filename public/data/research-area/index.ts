export interface Area {
    heading: string;
    imgSrc: string;
    text: string;
}

export const RESEARCHAREAS:Area[] = [
    {
        heading: "Protein Translocation & Mitochondria Biogenesis.",
        imgSrc: "/images/cards/mitochondria.jpeg",
        text: "Mitochondria biogenesis requires importing and folding hundreds of proteins synthesized on cytosolic ribosomes. The main focus is understanding the fundamental aspects of protein trafficking pathways into the mitochondrial sub-compartments via the mitochondrial Presequence translocase and Carrier translocases."
    },
    {
        heading: "Protein Folding in Cell: Mechanism and Regulation.",
        imgSrc: "/images/cards/Protein_folding.png",
        text: "Successful folding of newly translated proteins is mediated by a highly organized chaperone machinery, namely the Hsp70, Hsp40/J-proteins, and the chaperonin, TRiC, which prevents aggregation and assists in proper folding to their native conformations. Our primary focus is to uncover chaperone-mediated protein folding mechanisms in cells under diverse physiological conditions."
    },
    {
        heading: "Iron-Sulphur Cluster Biogenesis.",
        imgSrc: "/images/cards/ironsulfur.jpg",
        text: "Fe/S clusters are a vital moiety of proteins involved in a diverse cellular process. An essential function of mitochondria is the biogenesis of Fe/S clusters, as Fe/S cluster-containing proteins perform critical roles in cells, including electron transfer in oxidative phosphorylation. Our primary focus is investigating how Fe/S clusters are synthesized and subsequently incorporated into proteins in different disease model systems."
    },
    {
        heading: "Role of Heat Shock Proteins in Health and Diseases.",
        imgSrc: "/images/cards/disease.jpg",
        text: "The involvement of chaperones in diverse cellular functions suggests novel therapeutic approaches by targeting heat-shock protein function for a broad spectrum of tumor types, various pathogenic disease states, and protein-conformational diseases."
    },
    {
        heading: "Redox Biology and Nanomaterial Therapeutics.",
        imgSrc: "/images/cards/ros.png",
        text: "Cellular redox homeostasis is critically maintained by the equilibrium between ROS production and its removal through the involvement of well-defined antioxidant machinery. The association of ROS is well-known in several pathological conditions, including neurodegeneration, cancer progression, type two diabetes mellitus, and atherosclerosis. The future study also aims to formulate potent biocompatible nanoparticles that can scavenge elevated ROS under pathological conditions."
    }
]