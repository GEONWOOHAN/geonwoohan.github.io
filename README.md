# HAN Geon Woo | Kakam

GitHub Pages user site for `GEONWOOHAN`, styled as a resume/CV page and based on public blog records from `보안공부일지`.

## 배포 방법

1. GitHub에서 `GEONWOOHAN.github.io` 이름의 public repository를 만듭니다.
2. 이 폴더는 이미 `main` 브랜치와 첫 커밋이 준비되어 있습니다.
3. 이 폴더에서 아래 명령을 실행합니다.

```powershell
git push -u origin main
```

4. GitHub repository의 `Settings` > `Pages`로 이동합니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch는 `main`, folder는 `/ (root)`로 선택합니다.
7. 배포가 끝나면 `https://geonwoohan.github.io/`에서 확인할 수 있습니다.

원격이 지워졌거나 새로 초기화한 경우에만 아래 명령을 먼저 실행하세요.

```powershell
git remote add origin https://github.com/GEONWOOHAN/GEONWOOHAN.github.io.git
```

비밀번호를 명령어에 직접 넣지 마세요. GitHub 로그인은 브라우저, Git Credential Manager, 또는 personal access token을 사용하세요.

## 참고한 공개 자료

- GitHub Pages quickstart: https://docs.github.com/ko/pages/quickstart
- GitHub profile: https://github.com/GEONWOOHAN
- Naver Blog: https://blog.naver.com/daily_log_coding
- Naver Blog RSS: https://rss.blog.naver.com/daily_log_coding.xml
