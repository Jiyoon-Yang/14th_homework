import { test, expect } from "@playwright/test";

test.describe("Purchase Detail 구매하기 모달 테스트", () => {
  test.beforeEach(async ({ page }) => {
    // /purchase/[id] 페이지로 이동
    await page.goto("/purchase/test-id");
    // purchase-detail 컴포넌트가 로드될 때까지 대기
    await page.waitForSelector('[data-testid="purchase-detail-page"]');
  });

  test("구매하기 버튼이 렌더링된다", async ({ page }) => {
    const purchaseButton = page.locator('[data-testid="purchase-button"]');
    await expect(purchaseButton).toBeVisible();
  });

  test("구매하기 버튼 클릭시 모달이 열린다", async ({ page }) => {
    const purchaseButton = page.locator('[data-testid="purchase-button"]');
    
    // 구매하기 버튼 클릭
    await purchaseButton.click();
    
    // 모달이 나타날 때까지 대기
    const modal = page.locator('[data-testid="purchase-modal"]');
    await expect(modal).toBeVisible();
  });

  test("모달이 열린 상태에서 backdrop 클릭시 모달이 닫힌다", async ({ page }) => {
    const purchaseButton = page.locator('[data-testid="purchase-button"]');
    
    // 구매하기 버튼 클릭
    await purchaseButton.click();
    
    // 모달이 나타날 때까지 대기
    const modal = page.locator('[data-testid="purchase-modal"]');
    await expect(modal).toBeVisible();
    
    // backdrop 클릭 (모달의 부모 요소)
    const backdrop = page.locator('[data-testid="purchase-modal"]').locator('..');
    await backdrop.click({ position: { x: 1, y: 1 } });
    
    // 모달이 사라지는지 확인
    await expect(modal).not.toBeVisible();
  });
});

