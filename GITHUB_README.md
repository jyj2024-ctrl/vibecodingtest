# 🎉 Team Building Day - 학습혁신담당

팀빌딩 이벤트를 위한 웹 기반 플랫폼입니다. 16명의 참가자가 각자의 기기에서 실시간으로 팀 배정에 참여할 수 있습니다.

## 🌟 주요 기능

- **Google 로그인 인증** (Firebase Authentication)
- **실시간 팀 배정** (멀티 디바이스 동기화)
- **데이터 영구 저장** (Firebase Firestore)
- **크로스 디바이스 데이터 동기화**
- **반응형 디자인** (모바일/태블릿/데스크톱)

## 🚀 빠른 시작

### 1. 저장소 클론

```bash
git clone https://github.com/YOUR_USERNAME/team-building-day.git
cd team-building-day
```

### 2. Firebase 설정

**중요**: Firebase Console에서 3단계 설정이 필요합니다.

1. [QUICK_START.md](./QUICK_START.md) 파일을 열어 상세 가이드 확인
2. Firebase Console에서:
   - Firestore Database 활성화
   - Google Authentication 활성화
   - 보안 규칙 설정

### 3. 로컬 서버 실행

```bash
# Python 3가 설치되어 있다면
python -m http.server 8000

# 또는 Node.js가 설치되어 있다면
npx serve
```

브라우저에서 `http://localhost:8000` 접속

## 📂 프로젝트 구조

```
team-building-day/
├── index.html              # 홈 페이지
├── team-game.html          # 팀구성 게임 (Firebase 통합)
├── lunch-talk.html         # 런치 토크 안내
├── mbti-guide.html         # MBTI 가이드
├── firebase-config.js      # Firebase 설정
├── css/
│   └── style.css          # 공통 스타일
├── js/
│   └── main.js            # 공통 JavaScript
├── QUICK_START.md         # 빠른 시작 가이드
├── FIREBASE_SETUP.md      # Firebase 상세 설정 가이드
└── README.md              # 프로젝트 문서
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **Hosting**: 정적 호스팅 (Netlify, Vercel, GitHub Pages)

## 📱 주요 페이지

### 1. 홈 페이지 (`index.html`)
- 팀빌딩 일정 및 안내
- 3단계 프로세스 설명
- 팀빌딩의 3가지 목표 제시

### 2. 팀구성 게임 (`team-game.html`)
- Google 로그인
- 실시간 팀 배정
- 자동 팀 밸런싱
- 진행 상황 표시

### 3. 런치 토크 안내 (`lunch-talk.html`)
- 슬라이드 형식 가이드
- 대화 주제 제시
- 실시간 팀 구성 명단

### 4. MBTI 가이드 (`mbti-guide.html`)
- 16가지 MBTI 유형 카드
- 강점/약점 모달
- 추천 직업 정보

## 🎯 팀 배정 규칙

- **A팀 (5명)**: 컬처파트 1 + 영상미디어 2 + 인재육성 2
- **B팀 (5명)**: 컬처파트 1 + 영상미디어 2 + 인재육성 2
- **C팀 (6명)**: 학습혁신담당 1 + 영상미디어 3 + 인재육성 2

**총 16명**: 학습혁신담당 1명 + 영상미디어 7명 + 인재육성 6명 + 컬처파트 2명

## 🔒 Firebase 보안 규칙

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /teamAssignments/{assignmentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🚀 배포

### Netlify 배포

1. [Netlify](https://www.netlify.com/)에 로그인
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 연결
4. Build settings:
   - Build command: (비워두기)
   - Publish directory: `/`
5. Deploy!

### Firebase Console 설정 추가

배포 후 Firebase Console → Authentication → Settings → Authorized domains에 배포 도메인 추가

## 📊 데이터 구조

### Firestore Collections

#### `users` (사용자 프로필)
```json
{
  "uid": "google-user-id",
  "email": "user@example.com",
  "displayName": "홍길동",
  "photoURL": "https://...",
  "lastLoginAt": 1234567890,
  "teamAssignment": {
    "memberId": 1,
    "teamIndex": 0,
    "updatedAt": 1234567890
  }
}
```

#### `teamAssignments` (팀 배정 기록)
```json
{
  "userId": "google-user-id",
  "email": "user@example.com",
  "displayName": "홍길동",
  "memberId": 1,
  "memberName": "정화연",
  "department": "학습혁신담당",
  "teamIndex": 0,
  "assignedAt": 1234567890
}
```

## 🐛 문제 해결

### 로그인이 안 될 때
- 브라우저 팝업 차단 해제
- Firebase Console에서 Google Authentication 활성화 확인
- 승인된 도메인에 현재 도메인 추가 확인

### 데이터가 복원되지 않을 때
- 같은 Google 계정으로 로그인했는지 확인
- 브라우저 콘솔(F12)에서 Firebase 연결 에러 확인
- Firestore 보안 규칙 올바르게 설정되었는지 확인

## 📝 라이선스

MIT License

## 👥 기여자

학습혁신담당 팀

## 📞 문의

프로젝트 관련 문의사항이 있으시면 Issues 탭에 등록해주세요.

---

**© 2026 학습혁신담당 Team Building Day. All rights reserved.**
