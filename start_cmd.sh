while IFS=$'\n' read -r line
do
    echo $line
done < "source/log.log"