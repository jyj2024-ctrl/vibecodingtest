# 🚀 빠른 시작 가이드 (Firebase 설정)

Firebase 설정이 완료되었습니다! 이제 Firebase Console에서 **3가지만** 설정하면 바로 사용할 수 있습니다.

---

## ✅ 완료된 작업

- ✅ Firebase 설정 (`firebase-config.js`)에 프로젝트 정보 입력 완료
- ✅ Google 로그인 UI 추가 완료
- ✅ Firestore 데이터 저장/로드 로직 구현 완료

---

## 🔧 Firebase Console에서 해야 할 3가지 설정

### 1️⃣ **Firestore Database 활성화**

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택: **test-3aa91**
3. 좌측 메뉴: **Firestore Database** 클릭
4. **데이터베이스 만들기** 버튼 클릭
5. **프로덕션 모드로 시작** 선택
6. 위치 선택: **asia-northeast3 (Seoul)** 권장
7. **사용 설정** 클릭

---

### 2️⃣ **보안 규칙 설정**

Firestore Database 생성 후:

1. Firestore Database 페이지에서 **규칙(Rules)** 탭 클릭
2. 아래 코드를 복사하여 붙여넣기:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 팀 배정 기록: 로그인한 사용자만 읽기/쓰기 가능
    match /teamAssignments/{assignmentId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // 사용자 프로필: 본인 데이터만 읽기/쓰기 가능
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. **게시** 버튼 클릭

---

### 3️⃣ **Google 로그인 활성화**

1. 좌측 메뉴: **Authentication** 클릭
2. **시작하기** 버튼 클릭 (처음이라면)
3. **Sign-in method** 탭 클릭
4. **Google** 제공업체 선택
5. **사용 설정** 토글 ON
6. 프로젝트 지원 이메일 선택 (본인 이메일)
7. **저장** 클릭

---

### 4️⃣ **승인된 도메인 추가** (선택 - 배포 시 필요)

Authentication → Settings → Authorized domains에서:

- ✅ `localhost` (이미 추가되어 있음)
- ➕ 배포 도메인 추가 (예: `your-app.netlify.app`)

---

## 🧪 테스트 방법

### 1. 로컬에서 테스트

```bash
# 프로젝트 폴더에서 로컬 서버 실행
# Python 3가 설치되어 있다면:
python -m http.server 8000

# 또는 Node.js가 설치되어 있다면:
npx serve
```

브라우저에서 `http://localhost:8000/team-game.html` 접속

---

### 2. 로그인 테스트

1. **team-game.html** 페이지 접속
2. 로그인 모달이 자동으로 표시됨
3. **"Google로 로그인"** 버튼 클릭
4. Google 계정 선택
5. 로그인 성공 → 우측 상단에 프로필 표시

---

### 3. 데이터 유지 테스트

1. 로그인 후 **본인 이름 클릭** (팀 배정)
2. 브라우저 **새로고침 (F5)**
3. ✅ **자동으로 로그인 유지** 확인
4. ✅ **선택한 팀 그대로 표시** 확인
5. 브라우저 **완전히 종료** 후 다시 접속
6. ✅ **이전 팀 배정이 그대로 복원**됨 확인

---

### 4. 크로스 디바이스 테스트

1. **PC에서 로그인** → 팀 선택
2. **스마트폰에서 같은 Google 계정으로 로그인**
3. ✅ PC에서 선택한 팀이 **스마트폰에도 표시**됨

---

## 🔍 디버깅

브라우저 개발자 도구 (F12) → Console 탭에서 확인:

```
✅ Firebase initialized successfully
✅ User logged in: {uid: "...", email: "..."}
✅ Loaded team assignment from Firestore: {...}
✅ Team assignment saved to Firestore
```

---

## ⚠️ 주의사항

### 팝업 차단 해제
Google 로그인은 팝업 창을 사용합니다. 브라우저에서 팝업 차단이 되어 있으면 로그인이 안 됩니다.

**Chrome 팝업 허용 방법:**
1. 주소창 오른쪽 팝업 차단 아이콘 클릭
2. "항상 허용" 선택

---

### Firebase 요금
- **무료 플랜 (Spark)으로 충분합니다**
- Firestore: 하루 5만 읽기, 2만 쓰기 무료
- Authentication: 무제한 무료
- 팀빌딩 행사 용도로는 무료 한도 내에서 사용 가능

---

## 📊 Firestore 데이터 구조

### `users` 컬렉션 (사용자 프로필)
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

### `teamAssignments` 컬렉션 (팀 배정 기록)
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

---

## 🎉 완료!

Firebase Console에서 3가지 설정만 완료하면 바로 사용할 수 있습니다!

- **Firestore Database 활성화**
- **보안 규칙 설정**
- **Google 로그인 활성화**

모든 코드는 이미 준비되어 있습니다. 🚀
