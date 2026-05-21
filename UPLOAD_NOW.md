# 🚀 GitHub 업로드 - 빠른 시작 (1분 가이드)

## 📌 가장 빠른 방법: GitHub Desktop 사용

### 1️⃣ GitHub Desktop 설치
- 다운로드: https://desktop.github.com/
- 설치 후 GitHub 계정으로 로그인

### 2️⃣ 저장소 생성 (3단계)
1. `File` → `Add Local Repository` → 프로젝트 폴더 선택
2. `Create a repository` 클릭
3. 이름: `team-building-day` 입력 → `Create repository`

### 3️⃣ 업로드 (2단계)
1. Summary에 `Initial commit` 입력 → `Commit to main`
2. `Publish repository` → `Publish Repository` 클릭

### ✅ 완료!
```
https://github.com/YOUR_USERNAME/team-building-day
```

---

## 💻 터미널 사용 (3분)

### 준비물
- Git 설치: https://git-scm.com/downloads
- GitHub 계정

### 명령어 (복사 붙여넣기)

```bash
# 1. 프로젝트 폴더로 이동
cd /path/to/team-building-day

# 2. Git 초기화 및 커밋
git init
git add .
git commit -m "Initial commit - Team building project"

# 3. GitHub 저장소 연결 (YOUR_USERNAME 변경!)
git remote add origin https://github.com/YOUR_USERNAME/team-building-day.git
git branch -M main
git push -u origin main
```

### ⚠️ 주의
- GitHub에서 먼저 저장소 생성: https://github.com/new
- `YOUR_USERNAME`을 본인 GitHub 아이디로 변경

---

## 📖 상세 가이드

더 자세한 내용은 다음 파일을 참고하세요:
- **전체 가이드**: [GITHUB_UPLOAD_GUIDE.md](./GITHUB_UPLOAD_GUIDE.md)
- **프로젝트 README**: [GITHUB_README.md](./GITHUB_README.md)

---

## 🎯 업로드 후 할 일

### 1. Firebase Authorized Domains 추가
- Firebase Console → Authentication → Settings
- 도메인 추가: GitHub Pages URL

### 2. GitHub Pages 활성화 (선택)
- Repository Settings → Pages
- Branch: `main` 선택 → Save

### 3. README 업데이트
- `GITHUB_README.md` 내용을 `README.md`로 복사

---

## 🆘 문제 해결

### "repository not found" 에러
→ GitHub에서 저장소를 먼저 생성하세요

### 로그인 요청
→ GitHub 아이디/비밀번호 입력 (또는 Personal Access Token)

### 상세 도움말
→ [GITHUB_UPLOAD_GUIDE.md](./GITHUB_UPLOAD_GUIDE.md) 파일 확인

---

**🎉 성공하면 팀원들과 공유하세요!**
