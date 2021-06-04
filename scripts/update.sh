rm -rf html/*
wget -P html -p -k -nH --cut-dirs=1 -r -l1 --content-disposition --adjust-extension https://sites.uea.ac.uk/cru/
