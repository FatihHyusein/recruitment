#!/usr/bin/env bash
echo "username:"
read user
#user='fatihHyuseinov'
declare -a repos=('tixets','selfcare');

for repo in $repos
do
    address=$(printf "https://%s@bitbucket.org/imperiaonline/%s.git" "$user" "$repo")
    echo $repos
    if ! test ls | grep $repo
    then git clone $address
    fi

    cd $repo
    git pull $address "develop"
    cd ..
done

