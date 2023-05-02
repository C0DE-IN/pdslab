export interface AboutInterface {
    heading: string;
    content: string[];
    author: string;
}
export const ABOUTDATA: AboutInterface = {
    heading: "What we do",
    content: [
        "Understanding how proteins accurately fold into three-dimensional structures in the cell is a central problem in modern biology. After ribosomal synthesis, the nascent polypeptides must actively fold into their native conformations to function correctly within the cell. Protein misfolding leads to cellular accumulation of incorrectly folded proteins, which is the cause of many diseases, including Alzheimer's, Huntington, Prion diseases, and Cancer. Ordered protein folding in the cramped cellular chaos is only possible under the supervision of specialized proteins, collectively referred to as 'Molecular Chaperones', which belong to Hsp70 and Hsp40/J-class. These highly conserved groups of proteins recognize and stabilize partially folded intermediates of proteins during cellular processes such as protein translation, transport across organellar membranes, folding, and degradation, as well as facilitating the refolding of proteins damaged after exposure of cells to stress.",
        "Our research aims to understand the intricate functional network of Hsp70 and Hsp40/J-class in the cytosol and different cell organelles. By utilizing yeast and mammalian model systems, my lab will investigate the cellular functions of molecular chaperones using a combination of experimental tools from genetics and cell biology with biochemistry and biophysics. We will address molecular chaperones' role(s) in following different physiological functions."
    ],
    author: "PDS Lab"
}

