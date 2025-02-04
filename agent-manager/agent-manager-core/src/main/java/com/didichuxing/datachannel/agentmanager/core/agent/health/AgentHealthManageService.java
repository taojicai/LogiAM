package com.didichuxing.datachannel.agentmanager.core.agent.health;

import com.didichuxing.datachannel.agentmanager.common.bean.domain.agent.health.AgentHealthDO;

/**
 * @author huqidong
 * @date 2020-09-21
 * Agent管理服务接口
 */
public interface AgentHealthManageService {

    /**
     * 根据给定Agent 对象 id 值创建初始AgentHealth对象
     * @param agentId Agent 对象 id 值
     * @param operator 操作人
     * @return 返回创建的Agent健康对象 id 值
     */
    Long createInitialAgentHealth(Long agentId, String operator);

    /**
     * 根据Agent对象id值删除对应AgentHealth对象
     * @param agentId Agent对象id值
     * @param operator 操作人
     */
    void deleteByAgentId(Long agentId, String operator);

    /**
     * 根据agentId获取对应AgentHealthDO对象
     * @param agentId Agent对象id值
     * @return 返回根据agentId获取到的对应AgentHealthDO对象
     */
    AgentHealthDO getByAgentId(Long agentId);

    /**
     * 更新给定AgentHealthDO对象
     * @param agentHealthDO 待更新AgentHealthDO对象
     * @param operator 操作人
     */
    void updateAgentHealth(AgentHealthDO agentHealthDO, String operator);

}
