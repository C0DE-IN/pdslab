export interface Article {
    authors: string[];
    title: string;
    journal: string;
    issue: string;
    pubmed: string;
    link: string;
    highlight?: string;
}

export interface Pub {
    year: string;
    articles: Article[];
}

export const PUBLICATIONS: Pub[] = [
    {
        year: "2023",
        articles: [
            {
                authors: [
                    "Abhishek Kumar",
                    "Tejashree Pradip Waingankar",
                    "Patrick D'Silva"
                ],
                title: "Functional crosstalk between the TIM22 complex and YME1 machinery maintains mitochondrial proteostasis and integrity",
                journal: "Journal of Cell Science",
                issue: "2023 Jan",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/36601773/",
                link: "https://doi.org/10.1242/jcs.260060",
                highlight: "https://journals.biologists.com/jcs/article/136/2/e136_e0201/286813/Complex-crosstalk-in-mitochondrial-proteostasis"
            }
        ]
    },
    {
        year: "2022",
        articles: [
            {
                authors: [
                    "Melvin Prasad*",
                    "Priyanka Kataria*",
                    "Sunayana Ningaraju",
                    "Radhika Buddidathi",
                    "Kondalarao Bankapalli",
                    "Swetha Chenna",
                    "Gautam Susarla",
                    "Radhika Venkatesan",
                    "Patrick D’Silva#",
                    "P. V. Shivaprasad#"
                ],
                title: "Double DJ-1 domain containing Arabidopsis DJ-1D is a robust macromolecule deglycase",
                journal: "New Phytologist",
                issue: "2022 Jul",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/35976797/",
                link: "https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.18414",
                highlight: "https://www.cell.com/trends/plant-science/fulltext/S1360-1385(23)00193-0"
            },
            {
                authors: [
                    "Abhishek Kumar",
                    "Srujan Kumar Matta",
                    "Vigneshwaran R",
                    "Patrick D'Silva"
                ],
                title: "A journey through the gateway of polytopic inner membrane proteins: The carrier translocase machinery",
                journal: "Current Opinion in Physiology",
                issue: "2022 Mar",
                pubmed: "https://www.sciencedirect.com/science/article/pii/S2468867322000517",
                link: "https://www.sciencedirect.com/science/article/pii/S2468867322000517"
            },
            {
                authors: [
                    "Vinaya Vishwanathan",
                    "Patrick D'Silva"
                ],
                title: "Loss of Function of mtHsp70 Chaperone Variants Leads to Mitochondrial Dysfunction in Congenital Sideroblastic Anemia",
                journal: "Frontiers in Cell and Developmental Biology",
                issue: "2022 Feb",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/35252210/",
                link: "https://www.frontiersin.org/articles/10.3389/fcell.2022.847045/full"
            }
        ]
    },
    {
        year: "2021",
        articles: [
            {
                authors: [
                    "Tejashree Pradip Waingankar",
                    "Patrick D'Silva"
                ],
                title: "Multiple variants of the human presequence translocase motor subunit Magmas govern the mitochondrial import",
                journal: "Journal of Biological Chemistry",
                issue: "2021 Dec",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/34715125/",
                link: "https://www.sciencedirect.com/science/article/pii/S0021925821011558?via%3Dihub"
            },
            {
                authors: [
                    "Prasanna Katti",
                    "Mamta Rai",
                    "Shubhi Srivastava",
                    "Patrick D'Silva",
                    "Upendra Nongthomba"
                ],
                title: "Marf-mediated mitochondrial fusion is imperative for the development and functioning of indirect flight muscles (IFMs) in drosophila",
                journal: "Experimental Cell Research",
                issue: "2021 Feb",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/33450208/",
                link: "https://www.sciencedirect.com/science/article/pii/S0014482721000173?via%3Dihub"
            }
        ]
    },
    {
        year: "2020",
        articles: [
            {
                authors: [
                    "Abhishek Kumar",
                    "Srujan Kumar Matta",
                    "Patrick D'Silva"
                ],
                title: "Role of conserved regions of Tim22 in the structural organization of the carrier translocase",
                journal: "Journal of Cell Science",
                issue: "2020 Jun",
                pubmed: "https://jcs.biologists.org/content/early/2020/06/25/jcs.244632",
                link: "https://jcs.biologists.org/content/early/2020/06/25/jcs.244632"
            },
            {
                authors: [
                    "Srujan Kumar Matta",
                    "Abhishek Kumar",
                    "Patrick D’Silva"
                ],
                title: "Mgr2 regulates mitochondrial preprotein import by associating with channel-forming Tim23 subunit.",
                journal: "Molecular Biology of the Cell",
                issue: "2020 May",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/32186971/?from_term=D%27Silva+P&from_cauthor_id=32186971&from_pos=2",
                link: "https://www.molbiolcell.org/doi/abs/10.1091/mbc.E19-12-0677?rfr_dat=cr_pub++0pubmed&url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&journalCode=mboc"
            },
            {
                authors: [
                    "Kondalarao Bankapalli",
                    "Vinaya Vishwanathan",
                    "Gautam Susarla",
                    "Ningaraju Sunayana",
                    "SreeDivya Saladi",
                    "Divya Peethambaram",
                    "Patrick D'Silva"
                ],
                title: "Redox-dependent Regulation of Mitochondrial Dynamics by DJ-1 Paralogs in Saccharomyces Cerevisiae",
                journal: "Redox Biology",
                issue: "2020 Feb",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/32070881/?from_term=D%27Silva+P&from_cauthor_id=32186971&from_pos=3",
                link: "https://www.sciencedirect.com/science/article/pii/S2213231719313539?via%3Dihub"
            },
            {
                authors: [
                    "Shubhi Srivastava",
                    "Vinaya Vishwanathan",
                    "Abhijit Birje",
                    "Devanjan Sinha",
                    "Patrick D'Silva"
                ],
                title: "Evolving Paradigms on the Interplay of Mitochondrial Hsp70 Chaperone System in Cell Survival and Senescence",
                journal: "Critical Reviews in Biochemistry and Molecular Biology",
                issue: "2020 Jan",
                pubmed: "https://pubmed.ncbi.nlm.nih.gov/31997665/?from_term=D%27Silva+P&from_cauthor_id=32186971&from_pos=4",
                link: "https://www.tandfonline.com/doi/full/10.1080/10409238.2020.1718062"
            }
        ]
    },
    {
        year: "2019",
        articles: [
            {
                authors: [
                    "Namrata Singh",
                    "Mohammed Azharuddin Savanur",
                    "Shubhi Srivastava",
                    "Patrick D'Silva",
                    "Govindasamy Mugesh"
                ],
                title: "A manganese oxide nanozyme prevents the oxidative damage of biomolecules without affecting the endogenous antioxidant system",
                journal: "Nanoscale",
                issue: "2019 Feb",
                pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/?term=30758009",
                link: "https://pubs.rsc.org/en/Content/ArticleLanding/2019/NR/C8NR09397K#!divAbstract"
            }
        ]
    },
    {
        year: "2017",
        articles: [
            {
                authors: [
                    "Govindasamy Mugesh",
                    "Namrata Singh",
                    "Mohammed Azharuddin Savanur",
                    "Shubhi Srivastava",
                    "Patrick D'Silva"
                ],
                title: "Redox Modulatory Mn3O4 Nanozyme with Multi-enzyme Activity Provides Efficient Cytoprotection to Human Cells in Parkinson's Disease Model.",
                journal: "Angew Chem Int Ed Engl",
                issue: "2017 Sept",
                pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/28922532",
                link: "http://onlinelibrary.wiley.com/doi/10.1002/anie.201708573/full"
            },
            {
                authors: [
                    "Shubhi Srivastava",
                    "Mohammed Azharuddin Savanur",
                    "Devanjan Sinha",
                    "Abhijit Birje",
                    "Vigneshwaran Renganathan",
                    "Prasenjit Prasad Saha",
                    "Patrick D'Silva*"
                ],
                title: "Regulation of mitochondrial protein import by the nucleotide exchange factors GrpEL1 and GrpEL2 in human cells.",
                journal: "J Biol Chem",
                issue: "2017 Aug",
                pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/28848044",
                link: "http://www.jbc.org/content/early/2017/08/28/jbc.M117.788463"
            },
            {
                authors: [
                    "Prasenjit Prasad Saha",
                    "Vinaya Vishwanathan",
                    "Kondalarao Bankapalli",
                    "Patrick D'Silva*"
                ],
                title: "Iron-Sulfur Protein Assembly in Human Cells",
                journal: "Rev Physiol Biochem Pharmacol",
                issue: "2017 Aug",
                pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/28828516",
                link: "https://link.springer.com/chapter/10.1007/112_2017_5"
            },
            {
                authors: [
                    "Prasad Melvin",
                    "Kondalarao Bankapalli",
                    "Patrick D'Silva",
                    "P. V. Shivaprasad"
                ],
                title: "Methylglyoxal detoxification by a DJ-1 family protein provides dual abiotic and biotic stress tolerance in transgenic plants.",
                journal: "Plant Mol Biol",
                issue: "2017 Jul",
                pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/28444544",
                link: "https://link.springer.com/article/10.1007%2Fs11103-017-0613-9"
            },
            {
                authors: [
                    "Srujan Kumar Matta",
                    "Gautam Pareek",
                    "Kondalarao Bankapalli",
                    " Anjaneya O",
                    "Patrick D'Silva*"
                ],
                title: "Role of Tim17 transmembrane regions in regulating the architecture of presequence translocase and mtDNA stability.",
                journal: "Mol Cell Biol",
                issue: "2017 Mar",
                pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/27994013",
                link: "http://mcb.asm.org/content/37/6/e00491-16.long"
            }
        ]
    },
    {
        year: "2016",
        articles: [
            {
                authors: [
                    "Devanjan Sinha",
                    "Shubhi Srivastava",
                    "Patrick D'Silva*"
                ],
                title: "Functional Diversity of Human Mitochondrial J-proteins Is Independent of Their Association with the Inner Membrane Presequence Translocase",
                journal: "J Biol Chem",
                issue: "2016 Aug",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Functional+Diversity+of+Human+Mitochondrial+J-proteins+Is+Independent+of+Their+Association+with+the+Inner+Membrane+Presequence+Translocase",
                link: "http://www.jbc.org/content/291/33/17345"
            }
        ]
    },
    {
        year: "2015",
        articles: [
            {
                authors: [
                    "Kondalarao Bankapalli",
                    "SreeDivya Saladi",
                    "Sahezeel S Awadia",
                    "Arvind Vittal Goswami",
                    "Madhuja Samaddar",
                    "Patrick D'Silva*"
                ],
                title: "Robust glyoxalase activity of Hsp31, a ThiJ/DJ-1/PfpI family member protein is critical for oxidative stress resistance in Saccharomyces cerevisiae",
                journal: "J Biol Chem",
                issue: "2015 Oct",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Robust+glyoxalase+activity+of+Hsp31%2C+a+ThiJ%2FDJ-1%2FPfpI+family+member+protein+is+critical+for+oxidative+stress+resistance+in+Saccharomyces+cerevisiae",
                link: "http://www.jbc.org/content/290/44/26491"
            },
            {
                authors: [
                    "Prasenjit Prasad Saha",
                    "Shubhi Srivastava",
                    "Praveen Kumar S.K",
                    "Devanjan Sinha",
                    "Patrick D'Silva*"
                ],
                title: "Mapping key residues of ISD11 critical for NFS1-ISD11 subcomplex stability: Implications in the development of mitochondrial disorder, COXPD19",
                journal: "J Biol Chem",
                issue: "2015 Oct",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Mapping+key+residues+of+ISD11+critical+for+NFS1-ISD11+subcomplex+stability%3A+Implications+in+the+development+of+mitochondrial+disorder%2C+COXPD19",
                link: "http://www.jbc.org/content/290/43/25876"
            },
            {
                authors: [
                    "Bijan Roy",
                    "Aloke kumar ghosh",
                    "Shubhi Srivastava",
                    "Patrick D’ Silva",
                    "Partha Sarathi Mukherjee"
                ],
                title: "A Pd8 Tetrafacial Molecular Barrel as Carrier for Water Insoluble Fluorophore.",
                journal: "J. Am. Chem. Soc",
                issue: "2015 Sept",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed?term=a%20pd8%20tetrafacial%20molecular%20barrel%20as%20carrier%20for%20water%20soluble%20fluorophore.&cmd=correctspelling",
                link: "http://pubs.acs.org/doi/abs/10.1021/jacs.5b08008"
            },
            {
                authors: [
                    "Bhowmick D#",
                    "Srivastava S#",
                    "D'Silva P*",
                    "Mugesh G*."
                ],
                title: "Highly Efficient Glutathione Peroxidase and Peroxiredoxin Mimetics Protect Mammalian Cells against Oxidative Damage.",
                journal: "Angew Chem Int Ed",
                issue: "2015 Jul",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/26032473",
                link: "http://onlinelibrary.wiley.com/doi/10.1002/anie.201502430/epdf",
                "highlight": "https://onlinelibrary.wiley.com/doi/full/10.1002/anie.201505056"
            }
        ]
    },
    {
        year: "2014",
        articles: [
            {
                authors: [
                    "Amit A. Vernekar#",
                    "D Sinha#, S Srivastava",
                    "P U. Paramasivam",
                    "P D’Silva*",
                    "G Mugesh*"
                ],
                title: "An antioxidant nanozyme that uncovers the cytoprotective potential of vanadia nanowires.",
                journal: "Nat. Communications",
                issue: "2014 Nov",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=An+antioxidant+nanozyme+that+uncovers+the+cytoprotective+potential+of+vanadia+nanowires.",
                link: "http://www.nature.com/ncomms/2014/141121/ncomms6301/full/ncomms6301.html"
            },
            {
                authors: [
                    "S Srivastava",
                    "D Sinha",
                    "P P Saha",
                    "H Marthala",
                    "P D'Silva*"
                ],
                title: "Magmas functions as a ROS regulator and provides cytoprotection against oxidative stress-mediated damages.",
                journal: "Nat. Cell Death and Disease",
                issue: "2014 Aug",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Magmas+functions+as+a+ROS+regulator+and+provides+cytoprotection+against+oxidative+stress-mediated+damages.",
                link: "http://www.nature.com/cddis/journal/v5/n8/pdf/cddis2014355a.pdf"
            },
            {
                authors: [
                    "Madhuja Samaddar",
                    "Arvind Vittal Goswami*",
                    "Jaya Purushotham",
                    "Pushpa Hegde#",
                    "Patrick D’Silva‡"
                ],
                title: "Role of the loop L4,5 in allosteric regulation in mtHsp70s: Revealing in vivo significance of domain communication and its implications in protein translocation.",
                journal: "Mol. Biol. Cell",
                issue: "2014 May",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Role+of+the+loop+L4%2C5+in+allosteric+regulation+in+mtHsp70s%3A+Revealing+in+vivo+significance+of+domain+communication+and+its+implications+in+protein+translocation.",
                link: "http://www.molbiolcell.org/content/early/2014/05/12/mbc.E14-03-0821.full.pdf+html"
            },
            {
                authors: [
                    "D Sinha",
                    "P D'Silva*"
                ],
                title: "Chaperoning mitochondrial permeability transition: regulation of transition pore complex by a J-protein, DnaJC15",
                journal: "Nat. Cell Death and Disease",
                issue: "2014 Mar",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Chaperoning+mitochondrial+permeability+transition%3A+regulation+of+transition+pore+complex+by+a+J-protein%2C+DnaJC15",
                link: "http://www.nature.com/cddis/journal/v5/n3/full/cddis201472a.html"
            },
            {
                authors: [
                    "Devanjan Sinha",
                    "Shubhi Srivastava",
                    "Lekshmi Krishna",
                    "Patrick D’Silva*"
                ],
                title: "Unraveling the intricate organization of mammalian mitochondrial presequence translocases: Existence of multiple translocases for maintenance of mitochondrial function",
                journal: "Mol Cell Biol",
                issue: "2014 Mar",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Unraveling+the+intricate+organization+of+mammalian+mitochondrial+presequence+translocases%3A+Existence+of+multiple+translocases+for+maintenance+of+mitochondrial+function",
                link: "http://mcb.asm.org/content/early/2014/03/11/MCB.01527-13.abstract"
            },
            {
                authors: [
                    "Prasenjit Prasad Saha",
                    "Praveen Kumar S. K",
                    "Shubhi Srivastava",
                    "Devanjan Sinha",
                    "Gautam Pareek",
                    "Patrick D'Silva*"
                ],
                title: "The Presence of Multiple Cellular Defects Associated with a Novel G50E ISCU Mutation leads to Development of Mitochondrial Myopathy",
                journal: "J Biol Chem",
                issue: "2014 Feb",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Multiple+Cellular+Defects+Associated+with+a+Novel+G50E+ISCU+Mutation+leads+to+Development+of+Mitochondrial+Myopathy",
                link: "http://www.jbc.org/content/early/2014/02/26/jbc.M113.526665.abstract"
            }
        ]
    },
    {
        year: "2013",
        articles: [
            {
                authors: [
                    "Gautam Pareek",
                    "Vivekanandhan Krishnamoorthy",
                    "Patrick D′ Silva*"
                ],
                title: "Molecular insights revealing interaction of Tim23 and channel subunits of presequence-translocase",
                journal: "Mol Cell Biol",
                issue: "2013 Dec",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Molecular+insights+revealing+interaction+of+Tim23+and+channel+subunits+of+presequence-translocase",
                link: "http://mcb.asm.org/content/early/2013/09/17/MCB.00876-13?related-urls=yes&legid=mcb;MCB.00876-13v1"
            },
            {
                authors: [
                    "Anushikha Thakur#",
                    "Dr. Kousik Chandra#",
                    "Abhinav Dubey",
                    "Dr. Patrick D'Silva*",
                    "Dr. Hanudatta S.Atreya*"
                ],
                title: "Rapid Characterization of Hydrogen Exchange in Proteins",
                journal: "Angew Chem Int Ed Engl",
                issue: "2013 Feb",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/23341333",
                link: "http://onlinelibrary.wiley.com/doi/10.1002/anie.201206828/abstract;jsessionid=4434CF0BF36CCA5E6F8E2CFD838E1B68.d02t01"
            }
        ]
    },
    {
        year: "2012",
        articles: [
            {
                authors: [
                    "Ratheesh Kumar R",
                    "Nagarajan N.S",
                    "Arunraj S.P",
                    "Devanjan Sinha",
                    "Vinoth Babu Veedin Rajan",
                    "Vinoth Kumar Esthaki",
                    "Patrick D’Silva*"
                ],
                title: "HSPIR: A manually annotated Heat Shock Protein Information Resource.",
                journal: "Bioinformatics",
                issue: "2012 Nov",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=HSPIR%3A+A+manually+annotated+Heat+Shock+Protein+Information+Resource.",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick15.pdf"
            },
            {
                authors: [
                    "Arvind Vittal Goswami",
                    "Madhuja Samaddar",
                    "Devanjan Sinha",
                    "Jaya Purushotham",
                    "Patrick D'Silva*"
                ],
                title: "Enhanced J-protein interaction and compromised protein stability of mtHsp70 variants lead to mitochondrial dysfunction in Parkinson's disease",
                journal: "Hum. Mol. Genet",
                issue: "2012",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Enhanced+J-protein+interaction+and+compromised+protein+stability+of+mtHsp70+variants+lead+to+mitochondrial+dysfunction+in+Parkinson%27s+disease",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick14.pdf"
            },
            {
                authors: [
                    "Anushikha Thakur",
                    "Balasubramanyam Chitoor",
                    "Arvind V. Goswami",
                    "Gautam Pareek",
                    "Hanudatta S. Atreya",
                    "Patrick D'Silva*"
                ],
                title: "Structure and Mechanistic Insights into Novel Iron-mediated Moonlighting Functions of Human J-protein Cochaperone, Dph4.",
                journal: "J. Biol. Chem",
                issue: "2012",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Structure+and+Mechanistic+Insights+into+Novel+Iron-mediated+Moonlighting+Functions+of+Human+J-protein+Cochaperone%2C+Dph4.",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick13.pdf"
            }
        ]
    },
    {
        year: "2011",
        articles: [
            {
                authors: [
                    "Gautam Pareek",
                    "Madhuja Samaddar",
                    "Patrick D'Silva*"
                ],
                title: "Primary Sequence That Determines the Functional Overlap between Mitochondrial Heat Shock Protein 70 Ssc1 and Ssc3 of Saccharomyces cerevisiae",
                journal: "J. Biol. Chem",
                issue: "2011",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Primary+Sequence+That+Determines+the+Functional+Overlap+between+Mitochondrial+Heat+Shock+Protein+70+Ssc1+and+Ssc3+of+Saccharomyces+cerevisiae.",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick12.pdf"
            },
            {
                authors: [
                    "B. Krishnarjuna#",
                    "Garima Jaipuria",
                    "Anushikha Thakur#",
                    "Patrick D'Silva*",
                    "Hanudatta S. Atreya*"
                ],
                title: "Amino acid selective unlabeling for sequence specific resonance assignments in proteins.",
                journal: "J Biomol NMR",
                issue: " 49, 2011",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/21153044",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick11.pdf"
            }
        ]
    },
    {
        year: "2010",
        articles: [
            {
                authors: [
                    "Garima Jaipuria#",
                    "Anushikha Thakur#",
                    "Patrick D'Silva*",
                    "Hanudatta S. Atreya*"
                ],
                title: "High-resolution methyl edited GFT NMR experiments for protein resonance assignments and structure determination.",
                journal: "J Biomol NMR",
                issue: "48, 2010",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=High-resolution+methyl+edited+GFT+NMR+experiments+for+protein+resonance+assignments+and+structure+determination.",
                link: "http://www.springerlink.com/content/c21l4814565u3755/"
            },
            {
                authors: [
                    "Arvind Vittal Goswami",
                    "Balasubramanyam Chittoor",
                    "Patrick D'Silva*"
                ],
                title: "Understanding the Functional Interplay between Mammalian Mitochondrial Hsp70 Chaperone Machine Components.",
                journal: "J. Biol. Chem",
                issue: "285, 2010",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Understanding+the+Functional+Interplay+between+Mammalian+Mitochondrial+Hsp70+Chaperone+Machine+Components.",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick10.pdf"
            },
            {
                authors: [
                    "Devanjan Sinha",
                    "Neha Joshi",
                    "Balasubramanyam Chittoor",
                    "Priyanka Samji",
                    "Patrick D' Silva*"
                ],
                title: "Role of Magmas in protein transport and human mitochondrial biogenesis.",
                journal: "Hum. Mol. Genet",
                issue: "19, 2010",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/20053669",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick9.pdf"
            }
        ]
    },
    {
        year: "2009",
        articles: [
            {
                authors: [
                    "Vinoth Babu V. Rajan",
                    "Patrick D' Silva*"
                ],
                title: "Arabidopsis thaliana, J-class heat shock proteins: cellular stress sensors.",
                journal: "Funct Integr Genomics",
                issue: "9, 2009",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Arabidopsis+thaliana%2C+J-class+heat+shock+proteins%3A+cellular+stress+sensors.",
                link: "http://www.ncbi.nlm.nih.gov/pubmed/?term=Arabidopsis+thaliana%2C+J-class+heat+shock+proteins%3A+cellular+stress+sensors."
            }
        ]
    },
    {
        year: "2003-2008",
        articles: [
            {
                authors: [
                    "Patrick R. D' Silva",
                    "Brenda Schilke",
                    "Masaya Hayashi",
                    "Elizabeth A. Craig."
                ],
                title: "Interaction of the J-Protein Heterodimer Pam18/Pam16 of the Mitochondrial Import Motor with the Translocon of the Inner Membrane.",
                journal: "Mol. Biol. Cell",
                issue: "19, 2008",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22Interaction+of+the+J-Protein+Heterodimer+Pam18%2FPam16+of+the+Mitochondrial+Import+Motor+with+the+Translocon+of+the+Inner+Membrane.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick1.pdf"
            },
            {
                authors: [
                    "Helena Knieszner",
                    "Brenda Schilke",
                    "Rafal Dutkiewicz",
                    "Patrick D'Silva",
                    "Sara Cheng",
                    "Maikke Ohlson",
                    "Elizabeth A. Craig",
                    "Jaroslaw Marszalek"
                ],
                title: "Compensation for a Defective Interaction of the Hsp70 Ssq1 with the Mitochondrial Fe-S Cluster Scaffold Isu*",
                journal: "J Biol Chem",
                issue: "32, 2006",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22Compensation+for+a+Defective+Interaction+of+the+Hsp70+Ssq1+with+the+Mitochondrial+Fe-S+Cluster+Scaffold+Isu%3Csup%3E*%3C/sup%3E.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick7.pdf"
            },
            {
                authors: [
                    "Brenda Schilke",
                    "Barry Williams",
                    "Helena Knieszner",
                    "Sebastian Pukszta",
                    "Patrick D'Silva",
                    "Elizabeth A. Craig",
                    "Jaroslaw Marszalek"
                ],
                title: "Evolution of Mitochondrial Chaperones Utilized in Fe-S Cluster Biogenesis.",
                journal: "Curr Biol",
                issue: "16, 2006",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22Evolution+of+Mitochondrial+Chaperones+Utilized+in+Fe-S+Cluster+Biogenesis.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick8.pdf"
            },
            {
                authors: [
                    "Patrick D' Silva",
                    "Jaroslaw Marszalek",
                    "Elizabeth A. Craig"
                ],
                title: "An Essential Connection: Link between Hsp70's Domains At Last.",
                journal: "Mol. Cell",
                issue: "20, 2005",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22An+Essential+Connection%3A+Link+between+Hsp70%27s+Domains+At+Last.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick2.pdf"
            },
            {
                authors: [
                    "Patrick R. D' Silva",
                    "Brenda Schilke",
                    "William Walter",
                    "Elizabeth A. Craig"
                ],
                title: "Role of Pam16's Degenerate J-Domain in Protein Import Across the Mitochondrial Inner Membrane.",
                journal: "Pro. Natl. Acad. Sci. (USA)",
                issue: "102, 2005",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22Role+of+Pam16%27s+Degenerate+J-Domain+in+Protein+Import+Across+the+Mitochondrial+Inner+Membrane.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick3.pdf"
            },
            {
                authors: [
                    "Patrick R. D' Silva",
                    "Brenda Schilke",
                    "William Walter",
                    "Elizabeth A. Craig."
                ],
                title: "Regulated interactions of mtHsp70 with Tim44 at the translocon in the mitochondrial inner membrane.",
                journal: "Nat. Struct. Mol. Biol",
                issue: "11, 2004",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22Regulated+interactions+of+mtHsp70+with+Tim44+at+the+translocon+in+the+mitochondrial+inner+membrane.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick4.pdf"
            },
            {
                authors: [
                    "Patrick D. D' Silva",
                    "Brenda Schilke",
                    "William Walter",
                    "Amy Andrew",
                    "Elizabeth A. Craig."
                ],
                title: "J-protein cochaperone of the mitochondrial inner membrane required for protein import into the mitochondrial matrix.",
                journal: "Proc. Natl. Acad. Sci. (USA)",
                issue: "100, 2003",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/14605210",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick5.pdf"
            },
            {
                authors: [
                    "Qinglian Liu",
                    "Patrick D' Silva",
                    "William Walter",
                    "Jaroslaw Marszalek",
                    "Elizabeth A. Craig"
                ],
                title: "Regulated cycling of mitochondrial Hsp70 at the protein import channel.",
                journal: "Science",
                issue: "2003",
                pubmed: "http://www.ncbi.nlm.nih.gov/pubmed/?term=%22Regulated+cycling+of+mitochondrial+Hsp70+at+the+protein+import+channel.%22",
                link: "http://pdslab.biochem.iisc.ernet.in/molecular_chaperone_lab/pdf/Patrick6.pdf"
            }
        ]
    }
]