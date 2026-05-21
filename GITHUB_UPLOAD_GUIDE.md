# 📦 GitHub 저장소에 업로드하기

이 가이드를 따라하면 5분 안에 GitHub에 프로젝트를 업로드할 수 있습니다!

---

## 🎯 방법 1: GitHub Desktop 사용 (가장 쉬움!)

### 1단계: GitHub Desktop 다운로드
- https://desktop.github.com/ 에서 다운로드 및 설치
- GitHub 계정으로 로그인

### 2단계: 저장소 생성
1. GitHub Desktop 실행
2. `File` → `Add Local Repository` 클릭
3. 프로젝트 폴더 선택
4. "Create a repository" 버튼 클릭

### 3단계: 저장소 설정
- **Name**: `team-building-day` (또는 원하는 이름)
- **Description**: `Team building event web platform with Firebase`
- **Git Ignore**: `None` (이미 .gitignore 파일이 있음)
- **License**: `MIT`

### 4단계: 첫 번째 커밋
1. Summary: `Initial commit - Team building day project`
2. Description: `Add Firebase authentication and Firestore integration`
3. `Commit to main` 버튼 클릭

### 5단계: GitHub에 게시
1. `Publish repository` 버튼 클릭
2. **Organization**: (선택사항)
3. **Keep this code private** 체크 해제 (공개 저장소로 만들기)
4. `Publish Repository` 버튼 클릭

✅ **완료!** 이제 `https://github.com/YOUR_USERNAME/team-building-day` 에서 확인할 수 있습니다!

---

## 🎯 방법 2: 터미널/명령 프롬프트 사용

### 사전 준비
- Git 설치: https://git-scm.com/downloads
- GitHub 계정 생성: https://github.com/signup

### 1단계: Git 설정 (처음 한 번만)

```bash
# Git 사용자 정보 설정
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2단계: GitHub에서 저장소 생성

1. https://github.com/new 접속
2. **Repository name**: `team-building-day`
3. **Description**: `Team building event web platform with Firebase`
4. **Public** 선택
5. **Initialize this repository with**: 아무것도 체크 안 함
6. `Create repository` 클릭

### 3단계: 로컬에서 Git 초기화 및 업로드

```bash
# 프로젝트 폴더로 이동
cd /path/to/your/team-building-day

# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 번째 커밋
git commit -m "Initial commit - Team building day project with Firebase"

# GitHub 저장소 연결 (YOUR_USERNAME을 본인 GitHub 아이디로 변경)
git remote add origin https://github.com/YOUR_USERNAME/team-building-day.git

# 기본 브랜치를 main으로 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

### 4단계: 인증

GitHub 로그인 창이 나타나면:
- GitHub 아이디와 비밀번호 입력
- 또는 Personal Access Token 사용 (권장)

#### Personal Access Token 생성 방법:
1. GitHub 로그인 → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token → Generate new token (classic)
4. **Note**: `team-building-day-upload`
5. **Expiration**: `90 days` (또는 원하는 기간)
6. **Select scopes**: `repo` 체크
7. `Generate token` 클릭
8. 생성된 토큰 복사 (한 번만 보임!)
9. 비밀번호 입력 대신 토큰 사용

✅ **완료!** 

---

## 🎯 방법 3: GitHub 웹 인터페이스 (파일이 적을 때)

### 1단계: GitHub에서 저장소 생성
1. https://github.com/new 접속
2. 저장소 이름 입력 및 생성

### 2단계: 파일 업로드
1. `Add file` → `Upload files` 클릭
2. 프로젝트 폴더의 모든 파일/폴더를 드래그 앤 드롭
3. Commit message: `Initial commit`
4. `Commit changes` 클릭

⚠️ **주의**: 이 방법은 파일이 많으면 시간이 오래 걸립니다.

---

## 📋 업로드 후 체크리스트

### ✅ 필수 확인 사항

1. **README.md 업데이트**
   - GitHub에서 `GITHUB_README.md`의 내용을 `README.md`로 복사
   - 또는 로컬에서 변경 후 다시 푸시

2. **Firebase 설정 확인**
   - `firebase-config.js` 파일이 올라갔는지 확인
   - ⚠️ **보안 주의**: Firebase config는 공개되어도 안전합니다 (프론트엔드용)

3. **GitHub Pages 활성화** (선택사항)
   - Repository → Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/(root)`
   - Save
   - 몇 분 후 `https://YOUR_USERNAME.github.io/team-building-day/` 에서 접속 가능

4. **Firebase Authorized Domains 추가**
   - Firebase Console → Authentication → Settings → Authorized domains
   - GitHub Pages 도메인 추가: `YOUR_USERNAME.github.io`

---

## 🔄 변경사항 업데이트하기

### GitHub Desktop 사용
1. 파일 수정 후 저장
2. GitHub Desktop에서 변경사항 확인
3. Summary 입력 (예: `Update login button style`)
4. `Commit to main` 클릭
5. `Push origin` 클릭

### 터미널 사용
```bash
# 변경사항 추가
git add .

# 커밋
git commit -m "Update: 로그인 버튼 우측 상단 이동"

# 푸시
git push
```

---

## 🎉 완료!

이제 GitHub 저장소가 생성되었습니다!

### 다음 단계:
1. ✅ GitHub 저장소 확인
2. ✅ README.md 읽기 쉽게 정리
3. ✅ GitHub Pages 활성화 (선택)
4. ✅ Firebase Authorized Domains에 도메인 추가
5. ✅ 팀원들과 공유!

### 저장소 URL:
```
https://github.com/YOUR_USERNAME/team-building-day
```

### GitHub Pages URL (활성화 시):
```
https://YOUR_USERNAME.github.io/team-building-day/
```

---

## 🆘 도움이 필요하신가요?

- **GitHub Desktop 튜토리얼**: https://docs.github.com/ko/desktop
- **Git 기본 가이드**: https://git-scm.com/book/ko/v2
- **GitHub Pages 가이드**: https://pages.github.com/

문제가 생기면 에러 메시지를 복사해서 검색하면 대부분 해결 방법을 찾을 수 있습니다!
