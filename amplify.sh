if [ $# -eq 0 ]
    then
        echo 'No commit message provided'
        exit 1
fi

COMMIT_MESSAGE=$1

git add .

git commit -m "${COMMIT_MESSAGE} [skip-cd]"