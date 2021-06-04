shopt -s extglob
pushd html && rm -rf -- !("README.md") && popd
wget -P html -p -k -nH --cut-dirs=1 -r -l1 --content-disposition --adjust-extension https://sites.uea.ac.uk/cru/
