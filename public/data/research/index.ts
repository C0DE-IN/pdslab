export interface Text {
    title?: string;
    content: string;
    list?: {
        heading: string;
        items: string[];
    }
}

export interface Research {
    imgSrc: string;
    heading: string;
    text: Text[]
}

export const RESEARCHES: Research[] = [
    {
        imgSrc: "/images/parallax/1.jpg",
        heading: "Protein Translocation & Mitochondria Biogenesis.",
        text: [
            {
                content: "Mitochondria are the 'power plants' of the cell and are essential not just for energy generation but also as a site for various metabolic reactions. Mitochondria biogenesis requires the import and folding of hundreds of proteins synthesized on cytosolic ribosomes. Utilizing the yeast model system, it has been demonstrated that the transport of proteins across the inner mitochondrial membrane 'presequence translocase' is driven by an import motor whose components have been highly conserved in evolution. Yeast 'import motor' consists of five essential sub-units (mtHsp70, Tim44, Mge1, Pam18, and Pam16) and one non-essential subunit called Pam17. A critical core component of this machine is the primary mitochondrial 70 kDa heat shock protein (mtHsp70), tethered to the import channel via its interaction with an essential peripheral membrane component, Tim44. Recently, two additional heat shock components of the import motor, a J-protein (Pam18 /Tim14) and a J-like protein (Pam16/Tim16), have been identified. Pam18 and Pam16 form a stable heterodimer and regulate the import process by modulating the activity of the 'import motor.' However, the regulation mechanism of import motors needs to be better understood"
            },
            {
                content: "The orthologs of yeast 'import motor' components are reported in human mitochondria comprising the 'human import motor' part. However, the human import system differs in composition due to additional components and the architecture of the import machinery itself. The regulation of human import motor activity is critical for the proper functioning and maintaining normal mitochondrial physiology. The altered regulation of 'import motor' leads to severe mitochondrial genetic disorders, including neurodegenerative diseases, malignancy, aging, and heart failure. Therefore, maintaining an efficient protein transport system in mitochondria is critical for cell function, thus preventing pathophysiology associated with mitochondrial diseases."
            },
            {
                content: "Similarly, the carrier translocase (also known as TIM22 complex) is involved in transporting and integrating complex polytopic membrane proteins into the inner mitochondrial membrane. The carrier translocase is evolutionarily conserved across the eukaryotic system, but its composition differs from yeast to humans. In Saccharomyces cerevisiae, the TIM22 complex is a 300-kDa inserting machinery consisting of the membrane subunits Tim22, Tim54, Sdh3, Tim18, and small Tim proteins Tim9, Tim10, and Tim12. Tim22 forms the central core channel, while Tim18 and Sdh3 stabilize the TIM22 complex. The tim54 functions as mediated protein for docking small Tim chaperones. The function of carrier translocase is indispensable for mitochondrial health since it is involved in transporting and organizing complex transport proteins, channels, ETC complexes, etc. However, the dynamicity of the carrier complex during import and functional crosstalk with other quality control machinery of the inner membrane remains elusive in higher-order organisms.",
                list: {
                    heading: "The long-term goal of this project is to:",
                    items: [
                        "1.	Characterize the human mitochondrial import motor and presequence translocase components.",
                        "2.	Dynamic association of presequence translocase components.",
                        "3.	Understand the mechanism and regulation of import motor components to gain fundamental insights into the mitochondrial protein transport process.",
                        "4.	Understand the role of carrier translocase in the mitochondrial health."
                    ]
                }
            },
        ]
    },
    {
        imgSrc: "/images/parallax/2.png",
        heading: "Folding in Cell: Mechanism and Regulation",
        text: [
            {
                content: "The proper folding of nascent and denatured polypeptide chains into their biologically active conformations requires the assistance of other pre-existing proteins known as molecular chaperones. Despite considerable progress in the biochemical and biophysical analyses of such chaperone proteins, very little is known about the mechanism of protein folding under cellular conditions. In vitro experiments cannot reflect the precise physicochemical conditions and other complex regulatory mechanisms within the cell. It is known that the successful folding of polypeptide chains and prevention of aggregation is mediated by highly organized chaperone families like the Hsp70, Hsp40/J-proteins, and chaperonins like TRic. The Hsp70 and J-protein genes have proliferated during evolution, and their products exist in virtually every cellular compartment, including cytosol, nucleus, ER, and mitochondrial matrix. Yet, owing to their critical function in cell survival, it is found that these genes show a great extent of evolutionary conservation."
            },
            {
                content: "The Saccharomyces cerevisiae genome encodes for 12 Hsp70s and 22 J-proteins, while human genome analysis has revealed 13 Hsp70s and 41 J-protein members. As a long-term goal, we will probe the exact mechanism regulating Hsp70 action in the cell and dissect the intricate functional network between Hsp70 and J-proteins at different cellular locations. Our lab will also investigate how these 'chaperone machinery' prevent aggregation of proteins and aid proper folding, using yeast and mammalian model systems."
            }
        ]
    },
    {
        imgSrc: "/images/parallax/3.png",
        heading: "Iron-Sulphur Clusters (Fe/S centres) Biogenesis",
        text: [
            {
                content: "Iron-sulfur clusters function as essential electron carriers and enzyme cofactors in many proteins. They play a vital role in a wide range of cellular processes, including electron transfer in oxidative phosphorylation, control of oxidative stress inside the cell, DNA repair, iron homeostasis, and ribosome biogenesis. These moieties are indispensable for the activity of certain critical enzymes involved in the metabolic pathways of biomolecules, including carbohydrates, fatty acids, and nucleotides. Any defects in Fe/S cluster biogenesis can lead to various biochemical and genetic disorders such as Friedreich ataxia, X-linked sideroblastic anemia, cerebellar ataxia, Xeroderma pigmentosum, etc."
            },
            {
                content: "From experimental studies, it has been found that mitochondria perform a central role in synthesizing and assembling Fe/S centres in the vast majority of proteins targeted into different cellular locations. The biogenesis of Fe/S clusters can be divided into two major events. Initially, the Fe/S cluster is assembled on a scaffold protein, providing a transient platform for this process. The second major step of biogenesis involves the release of the scaffold-bound Fe/S cluster and its transfer to apoprotein by coordination with specific amino acid ligands. This step is specifically assisted by a chaperone system comprised of the Hsp70 family member, the J-proteins, and the nucleotide exchange factor. We aim to understand the complex chaperone network involved in Fe/S cluster biogenesis in mammalian mitochondria."
            }
        ]
    },
    {
        imgSrc: "/images/parallax/4.png",
        heading: "Redox Biology and Nanomaterial Therapeutics.",
        text: [
            {
                content: "Mapping ROS signaling networks in eukaryotic systems: Reactive oxygen species (ROS) are the chemical species formed by incomplete oxygen reduction. ROS includes Superoxide anion (O2-), hydrogen peroxide (H2O2), and hydroxyl radicals (OH°). It is generated primarily as a by-product of cellular metabolism through the electron transport chain (ETC) leakage of electrons in mitochondria. A basal level of ROS is essential as a signaling molecule for multiple cellular functions. Cellular redox homeostasis is critically maintained by the equilibrium between ROS production and its removal through the involvement of well-defined antioxidant machinery. Any alteration in redox balance generates severe oxidative stress leading to multiple cellular damages. The association of ROS is well known in several pathological conditions, including neurodegeneration, cancer progression, type 2 diabetes mellitus, and atherosclerosis. Therefore, our long-term goal is to identify novel ROS regulator proteins and elucidate their intricate signaling pathways in different pathophysiological conditions.",
                list: {
                    heading: "The long-term goal of this project is to:",
                    items: [
                        "1. Uncover the role of DJ-1/Hsp31 class of proteins in redox homeostasis.",
                        "2. How DJ-1 paralogs regulate the carbonyl stress and protect macromolecules against glycation.",
                        "3. Mechanism of translocation of DJ-1 paralogs into mitochondria and maintenance of organellar health.",
                        "4. The future study also aims to formulate potent biocompatible nanoparticles that can scavenge elevated ROS in pathological conditions for therapeutic applications."
                    ]
                }
            }
        ]
    },
    {
        imgSrc: "/images/parallax/5.jpg",
        heading: "Role of Heat Shock Proteins in Health and Diseases",
        text: [
            {
                content: "The stress-protective heat-shock proteins are often overexpressed in cells of various cancers and have been suggested to be contributing factors in tumorigenesis. The overexpression of molecular chaperones has also been shown to protect cells against apoptotic cell death. Therefore, heat-shock proteins with dual roles as regulators of protein conformation and stress sensors may have intriguing roles in both cell proliferation and apoptosis. The function of molecular chaperones is also vital for the aging process, autoimmunity, and the replication of many viruses. The involvement of chaperones, therefore, in such diverse roles suggests novel therapeutic approaches by targeting heat-shock protein function for a broad spectrum of tumor types, various pathogenic disease states, and protein conformational diseases."
            }
        ]
    }
]