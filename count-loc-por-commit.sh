#!/bin/bash
git log --pretty=format:"%s|%an|%H" | while IFS="|" read message author commit_hash; do
  loc=$(git show "$commit_hash" | \
    grep "^+" | \
    grep -v "^+++" | \
    grep -v "^+$" | \
    grep -v "^+//" | \
    wc -l)
  echo "🔹 Autor: $author | 📄 Commit: \"$message\" | ➕ LOC efectivas: $loc"
done
