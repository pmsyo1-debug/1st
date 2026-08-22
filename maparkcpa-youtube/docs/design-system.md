# 영상 제작 규격

> 출처: HANDOFF.md 섹션 5 + EP01 영상제작본 v2. 전 회차 공통 적용.

## 디자인 시스템

```
배경        #0E1116  (딥 차콜)
본문 텍스트  #F2F3F5  (오프화이트)
보조 텍스트  #8A9099  (그레이)
감소·경고    #C7483B  (딥 레드)
증가·기준    #E8A33D  (앰버)
그리드선     #1E242C
```

- **폰트**: Pretendard (대형 숫자 Bold 900 / 본문 자막 Medium 500)
- **숫자 애니메이션**: 카운트업 0.8초 + 이징 아웃. 절대 튀지 않게
- **컷 전환**: 하드컷 기본. 디졸브는 파트 전환에서만
- **모션 원칙**: 요소는 한 번에 하나씩. 동시 등장 금지
- **BGM**: 저음 앰비언트 단일 트랙 -22dB. 긴장 조성용 스팅어 금지
- **출처 자막**: 데이터 컷 하단 좌측 고정, 12pt, 그레이

## Higgsfield 사용 원칙

- **전체의 25~30%만** 생성 클립. 나머지는 모션그래픽
- 숫자·그래프를 AI 생성 영상으로 만들지 말 것 (신뢰도 하락 + 크레딧 낭비)
- 생성 클립은 **개인 서사 구간 + 분위기 컷**에만
- 화면비 16:9. 채도 낮게 — 모션그래픽 팔레트와 붙었을 때 튀지 않아야 함

### MCP 연결

Claude Code는 별도 설정입니다. `.mcp.json` 또는 `claude mcp add`로 등록.
서버 URL: `https://mcp.higgsfield.ai/mcp`

## 주인공 캐릭터 규격

대표님 본인 초상이 아니라 **익명의 대역**입니다.
특정 인물로 식별되지 않게 항상 뒷모습·측면·원거리.

```
30대 초반 한국인 남성 / 짙은 회색 정장, 넥타이 없음, 화이트 셔츠
검은 단정한 머리, 무테 안경 / 표정 절제, 정면 클로즈업 없음
카메라는 항상 뒤·측면·먼 거리
```

### 생성 순서 (반드시 이 순서)

1. 레퍼런스 이미지 1장 생성
2. **Higgsfield Characters(Soul Character)로 등록** ← 건너뛰면 컷마다 다른 사람이 나옴
3. 이후 모든 서사 컷은 등록 캐릭터 참조
4. 마지막에 동일한 컬러그레이딩 LUT을 얹어 톤 통일

### 레퍼런스 생성 프롬프트 (16:9)

```
Cinematic still, Korean man in his early thirties, dark grey suit,
white shirt no tie, thin-framed glasses, short neat black hair.
Standing alone in an empty office corridor at night, seen from behind
and slightly to the side, face not visible. Cool desaturated palette,
deep charcoal shadows, single warm practical light source far ahead.
Shallow depth of field, 35mm, muted documentary tone, no text.
```

## 제작 순서

| 순서 | 작업 | 비고 |
|---|---|---|
| 1 | 코덱스 대본 수령 | |
| 2 | Claude가 컷 리스트 변환 | |
| 3 | **나레이션 녹음** | 실제 낭독 길이가 컷 타이밍을 결정 |
| 4 | 캐릭터 레퍼런스 생성 → Soul 등록 | |
| 5 | Higgsfield 클립 배치 생성 | |
| 6 | 모션그래픽 제작 | **핵심 증명 그래프 최우선** |
| 7 | 조립 + 자막 + 출처 | |
| 8 | 컬러그레이딩 통일 | HF 클립과 MG 톤 일치 |
| 9 | BGM + 믹싱 | 나레이션 -6dB / BGM -22dB |

## 녹음 가이드

- 줄바꿈 = 숨 쉬는 자리. 그대로 쉰다
- 질문 문장은 끝을 **내린다** (올리면 유도신문처럼 들림)
- "저는 ~라고 생각합니다"는 속도를 늦춘다 — 채널 정체성
- 숫자는 한 박자 쉬고 또박또박
- 톤: 강의가 아니라 **저녁에 후배한테 얘기해주는 톤**
