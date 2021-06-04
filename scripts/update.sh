shopt -s extglob
pushd html && rm -rf -- !("README.md") && popd
wget -P html -p -k -nH --cut-dirs=1 -r -l1 -w 0.1 --random-wait --content-disposition --adjust-extension https://sites.uea.ac.uk/cru/
